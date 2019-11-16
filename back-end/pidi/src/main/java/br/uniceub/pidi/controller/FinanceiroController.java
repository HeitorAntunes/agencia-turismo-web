package br.uniceub.pidi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.uniceub.pidi.model.FinanceiroModel;
import br.uniceub.pidi.model.FornecedorModel;
import br.uniceub.pidi.repository.FinanceiroRepository;
import br.uniceub.pidi.service.FinanceiroService;
import br.uniceub.pidi.service.FornecedorService;

@RestController
@RequestMapping("/cadastro-financeiro")
public class FinanceiroController {
	
	@Autowired
	private FinanceiroRepository repository;

	@Autowired
	private FinanceiroService service;

	@GetMapping
	private Page<FinanceiroModel> list(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "idFinanceiro") String sortBy) {
		return service.getAllFinanceiros(pageNo, pageSize, sortBy);
	}
	
	@GetMapping("/filter-fornecedor")
	public ResponseEntity<Page<FinanceiroModel>> filterSells(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "idFinanceiro") String sortBy,
            @RequestParam(defaultValue = "") String value) {
		Page<FinanceiroModel> list = service.getAllFinanceirosFiltered(pageNo, pageSize, sortBy, value);
		 
        return new ResponseEntity<Page<FinanceiroModel>>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/{idFinanceiro}")
	public ResponseEntity<FinanceiroModel> get(@PathVariable Long idFinanceiro) {
		Optional<FinanceiroModel> financeiro = repository.findById(idFinanceiro);

		if (financeiro == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(financeiro.get());
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public FinanceiroModel create(@Valid @RequestBody FinanceiroModel financeiro) {
		Optional<FinanceiroModel> existingFinanceiro = repository.findById(financeiro.getIdFinanceiro());

		if (existingFinanceiro.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um Financeiro com este CPF");
		}

		return repository.save(financeiro);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<FinanceiroModel> update(@Valid @RequestBody FinanceiroModel financeiro) {
		Optional<FinanceiroModel> newFinanceiro = repository.findById(financeiro.getIdFinanceiro());
		if (newFinanceiro == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(financeiro);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{idFinanceiro}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<FinanceiroModel> delete(@PathVariable Long idFinanceiro) {
		repository.deleteById(idFinanceiro);
		return ResponseEntity.ok().build();
	}


}
