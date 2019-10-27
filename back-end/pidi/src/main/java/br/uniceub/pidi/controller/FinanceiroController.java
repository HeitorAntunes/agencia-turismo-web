package br.uniceub.pidi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.uniceub.pidi.model.FinanceiroModel;
import br.uniceub.pidi.repository.FinanceiroRepository;

@RestController
@RequestMapping("/financeiro")
public class FinanceiroController {
	
	@Autowired
	private FinanceiroRepository repository;

	@GetMapping
	private List<FinanceiroModel> list() {
		return repository.findAll();
	}

	@GetMapping("/{id_financeiro}")
	public ResponseEntity<FinanceiroModel> get(@PathVariable Long id_financeiro) {
		Optional<FinanceiroModel> financeiro = repository.findById(id_financeiro);

		if (financeiro == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(financeiro.get());
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public FinanceiroModel create(@Valid @RequestBody FinanceiroModel financeiro) {
		Optional<FinanceiroModel> existingFinanceiro = repository.findById(financeiro.getId_financeiro());

		if (existingFinanceiro.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um Financeiro com este CPF");
		}

		return repository.save(financeiro);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<FinanceiroModel> update(@Valid @RequestBody FinanceiroModel financeiro) {
		Optional<FinanceiroModel> newFinanceiro = repository.findById(financeiro.getId_financeiro());
		if (newFinanceiro == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(financeiro);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{id_financeiro}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<FinanceiroModel> delete(@PathVariable Long id_financeiro) {
		repository.deleteById(id_financeiro);
		return ResponseEntity.ok().build();
	}


}
