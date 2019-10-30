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

import br.uniceub.pidi.model.ClienteModel;
import br.uniceub.pidi.repository.ClienteRepository;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

	@Autowired
	private ClienteRepository repository;

	@GetMapping
	private List<ClienteModel> list() {
		return repository.findAll();
	}

	@GetMapping("/{id_cliente}")
	public ResponseEntity<ClienteModel> get(@PathVariable Long id_cliente) {
		Optional<ClienteModel> cliente = repository.findById(id_cliente);

		if (cliente == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(cliente.get());
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ClienteModel create(@Valid @RequestBody ClienteModel cliente) {
		Optional<ClienteModel> existingCliente = repository.findById(cliente.getId_cliente());

		if (existingCliente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um Cliente com este CPF");
		}

		return repository.save(cliente);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<ClienteModel> update(@Valid @RequestBody ClienteModel cliente) {
		Optional<ClienteModel> newCliente = repository.findById(cliente.getId_cliente());

		if (newCliente == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(cliente);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{id_cliente}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<ClienteModel> delete(@PathVariable Long id_cliente) {
		repository.deleteById(id_cliente);
		return ResponseEntity.ok().build();
	}

}
