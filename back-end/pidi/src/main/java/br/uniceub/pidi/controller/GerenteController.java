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

import br.uniceub.pidi.model.GerenteModel;
import br.uniceub.pidi.repository.GerenteRepository;

@RestController
@RequestMapping("/gerente")
public class GerenteController {

	@Autowired
	private GerenteRepository repository;

	@GetMapping
	private List<GerenteModel> list() {
		return repository.findAll();
	}

	@GetMapping("/{id_gerente}")
	public ResponseEntity<GerenteModel> get(@PathVariable Long id_gerente) {
		Optional<GerenteModel> gerente = repository.findById(id_gerente);

		if (gerente == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(gerente.get());
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public GerenteModel create(@Valid @RequestBody GerenteModel gerente) {
		Optional<GerenteModel> existingGerente = repository.findById(gerente.getId_gerente());

		if (existingGerente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um Gerente com este CPF");
		}

		return repository.save(gerente);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<GerenteModel> update(@Valid @RequestBody GerenteModel gerente) {
		Optional<GerenteModel> newGerente = repository.findById(gerente.getId_gerente());

		if (newGerente == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(gerente);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{id_gerente}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<GerenteModel> delete(@PathVariable Long id_gerente) {
		repository.deleteById(id_gerente);
		return ResponseEntity.ok().build();
	}

}
