package br.uniceub.pidi.controller;

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
import br.uniceub.pidi.repository.AtendenteRepository;
import br.uniceub.pidi.service.AtendenteService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cadastro-atendente")
public class AtendenteController {

	@Autowired
	private AtendenteRepository repository;
	
	@Autowired
	private AtendenteService service;

	@GetMapping
	private Page<AtendenteModel> list(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "idAtendente") String sortBy) {
		return service.getAllAtendentes(pageNo, pageSize, sortBy);
	}

	@GetMapping("/{id_atendente}")
	public ResponseEntity<AtendenteModel> get(@PathVariable Long id_atendente) {
		Optional<AtendenteModel> atendente = repository.findById(id_atendente);

		if (atendente == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(atendente.get());
	}
	
	@GetMapping("/filter-atendente")
	public ResponseEntity<Page<AtendenteModel>> filterAtendentes(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "id_atendente") String sortBy,
            @RequestParam(defaultValue = "") String value) {
		Page<AtendenteModel> list = service.getAllAtendentesFiltered(pageNo, pageSize, sortBy, value);
		 
        return new ResponseEntity<Page<AtendenteModel>>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public AtendenteModel create(@Valid @RequestBody AtendenteModel atendente) {
		Optional<AtendenteModel> existingAtendente = repository.findById(atendente.getIdAtendente());

		if (existingAtendente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um Atendente com este CPF");
		}

		return repository.save(atendente);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<AtendenteModel> update(@Valid @RequestBody AtendenteModel atendente) {
		Optional<AtendenteModel> newAtendente = repository.findById(atendente.getIdAtendente());

		if (newAtendente == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(atendente);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{id_atendente}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<AtendenteModel> delete(@PathVariable Long id_atendente) {
		repository.deleteById(id_atendente);
		return ResponseEntity.ok().build();
	}

}
