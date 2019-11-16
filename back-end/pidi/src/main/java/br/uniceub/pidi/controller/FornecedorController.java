package br.uniceub.pidi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

import br.uniceub.pidi.model.AtendenteModel;
import br.uniceub.pidi.model.FornecedorModel;
import br.uniceub.pidi.repository.FornecedorRepository;
import br.uniceub.pidi.service.FornecedorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cadastro-fornecedor")
public class FornecedorController {

	@Autowired
	private FornecedorRepository repository;
	
	@Autowired
	private FornecedorService service;

	@GetMapping
	private Page<FornecedorModel> list(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "idFornecedor") String sortBy) {
		return service.getAllFornecedores(pageNo, pageSize, sortBy);
	}
	
	@GetMapping("/filter-fornecedor")
	public ResponseEntity<Page<FornecedorModel>> filterSells(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "idFornecedor") String sortBy,
            @RequestParam(defaultValue = "") String value) {
		Page<FornecedorModel> list = service.getAllFornecedorsFiltered(pageNo, pageSize, sortBy, value);
		 
        return new ResponseEntity<Page<FornecedorModel>>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/{id_fornecedor}")
	public ResponseEntity<FornecedorModel> get(@PathVariable Long id_fornecedor) {
		Optional<FornecedorModel> fornecedor = repository.findById(id_fornecedor);

		if (fornecedor == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(fornecedor.get());
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public FornecedorModel create(@Valid @RequestBody FornecedorModel fornecedor) {
		Optional<FornecedorModel> existingFornecedor = repository.findById(fornecedor.getId_fornecedor());

		if (existingFornecedor.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um Fornecedor com este CNPJ");
		}

		return repository.save(fornecedor);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<FornecedorModel> update(@Valid @RequestBody FornecedorModel fornecedor) {
		Optional<FornecedorModel> newFornecedor = repository.findById(fornecedor.getId_fornecedor());

		if (newFornecedor == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(fornecedor);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{id_fornecedor}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<FornecedorModel> delete(@PathVariable Long id_fornecedor) {
		repository.deleteById(id_fornecedor);
		return ResponseEntity.ok().build();
	}

}