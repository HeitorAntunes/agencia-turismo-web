package br.uniceub.pidi.controller;

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

import br.uniceub.pidi.model.OrdemServicoModel;
import br.uniceub.pidi.repository.OrdemServicoRepository;
import br.uniceub.pidi.service.OrdemServicoService;

@RestController
@RequestMapping("/cadastro-ordem_servico")
public class OrdemServicoController {

	@Autowired
	private OrdemServicoRepository repository;

	@Autowired
	private OrdemServicoService service;

	@GetMapping
	private Page<OrdemServicoModel> list(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "10000") Integer pageSize,
			@RequestParam(defaultValue = "idOrdemServico") String sortBy) {
		return service.getAllOrdemServicos(pageNo, pageSize, sortBy);
	}

	@GetMapping("/{idOrdemServico}")
	public ResponseEntity<OrdemServicoModel> get(@PathVariable Long idOrdemServico) {
		Optional<OrdemServicoModel> ordem_servico = repository.findById(idOrdemServico);

		if (ordem_servico == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(ordem_servico.get());
	}

	@GetMapping("/filter-ordemServico")
	public ResponseEntity<Page<OrdemServicoModel>> filterOrdemServicos(
			@RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "10000") Integer pageSize,
            @RequestParam(defaultValue = "id_ordemServico") String sortBy,
            @RequestParam(defaultValue = "") String value) {
		Page<OrdemServicoModel> list = service.getAllOrdemServicosFiltered(pageNo, pageSize, sortBy, value);
		 
        return new ResponseEntity<Page<OrdemServicoModel>>(list, new HttpHeaders(), HttpStatus.OK);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public OrdemServicoModel create(@Valid @RequestBody OrdemServicoModel ordem_servico) {
		return repository.save(ordem_servico);
	}
}
