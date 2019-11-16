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

import br.uniceub.pidi.model.ClienteModel;
import br.uniceub.pidi.repository.ClienteRepository;
import br.uniceub.pidi.service.ClienteService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cadastro-cliente")
public class ClienteController {

	@Autowired
	private ClienteRepository repository;
	
	@Autowired
	private ClienteService service;
	
	@GetMapping
	private Page<ClienteModel> list(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "idCliente") String sortBy) {
		return service.getAllClientes(pageNo, pageSize, sortBy);
	}

	@GetMapping("/{idCliente}")
	public ResponseEntity<ClienteModel> get(@PathVariable Long idCliente) {
		Optional<ClienteModel> cliente = repository.findById(idCliente);

		if (cliente == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(cliente.get());
	}
	
	@GetMapping("/filter-cliente")
	public ResponseEntity<Page<ClienteModel>> filterCliente(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "5") Integer pageSize,
            @RequestParam(defaultValue = "idCliente") String sortBy,
            @RequestParam(defaultValue = "") String value) {
		Page<ClienteModel> list = service.getAllClientesFiltered(pageNo, pageSize, sortBy, value);
		 
        return new ResponseEntity<Page<ClienteModel>>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ClienteModel create(@Valid @RequestBody ClienteModel cliente) {
		Optional<ClienteModel> existingCliente = repository.findById(cliente.getIdCliente());

		if (existingCliente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um Cliente com este CPF");
		}

		return repository.save(cliente);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<ClienteModel> update(@Valid @RequestBody ClienteModel cliente) {
		Optional<ClienteModel> newCliente = repository.findById(cliente.getIdCliente());

		if (newCliente == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(cliente);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{idCliente}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<ClienteModel> delete(@PathVariable Long idCliente) {
		repository.deleteById(idCliente);
		return ResponseEntity.ok().build();
	}

}
