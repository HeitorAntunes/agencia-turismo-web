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

import br.uniceub.pidi.model.OrdemServicoModel;
import br.uniceub.pidi.repository.OrdemServicoRepository;

@RestController
@RequestMapping("/ordem_servico")
public class OrdemServicoController {

	@Autowired
	private OrdemServicoRepository repository;

	@GetMapping
	private List<OrdemServicoModel> list() {
		return repository.findAll();
	}

	@GetMapping("/{id_ordem_Servico")
	public ResponseEntity<OrdemServicoModel> get(@PathVariable Long id_ordem_servico) {
		Optional<OrdemServicoModel> ordem_servico = repository.findById(id_ordem_servico);

		if (ordem_servico == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(ordem_servico.get());
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public OrdemServicoModel create(@Valid @RequestBody OrdemServicoModel ordem_servico) {
		Optional<OrdemServicoModel> existingOrdemServico = repository.findById(ordem_servico.getId_ordem_servico());

		if (existingOrdemServico.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um OrdemServico com este CPF");
		}

		return repository.save(ordem_servico);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<OrdemServicoModel> update(@Valid @RequestBody OrdemServicoModel ordem_Servico) {
		Optional<OrdemServicoModel> newOrdemServico = repository.findById(ordem_Servico.getId_ordem_servico());
		if (newOrdemServico == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(ordem_Servico);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{id_ordem_Servico}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<OrdemServicoModel> delete(@PathVariable Long id_ordem_servico) {
		repository.deleteById(id_ordem_servico);
		return ResponseEntity.ok().build();
	}
}
