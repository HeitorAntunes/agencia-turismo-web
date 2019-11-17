package br.uniceub.pidi.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.uniceub.pidi.model.DespesaModel;
import br.uniceub.pidi.repository.DespesaRepository;
import br.uniceub.pidi.service.DespesaService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/cadastro-despesa")
public class DespesaController {

		@Autowired
		private DespesaRepository repository;

		@Autowired
		private DespesaService service;

		@GetMapping
		private Page<DespesaModel> list(@RequestParam(defaultValue = "0") Integer pageNo,
				@RequestParam(defaultValue = "10000") Integer pageSize,
				@RequestParam(defaultValue = "idDespesa") String sortBy) {
			return service.getAllDespesas(pageNo, pageSize, sortBy);
		}

		@GetMapping("/{idDespesa}")
		public ResponseEntity<DespesaModel> get(@PathVariable Long idDespesa) {
			Optional<DespesaModel> despesa = repository.findById(idDespesa);

			if (despesa == null) {
				return ResponseEntity.notFound().build();
			}

			return ResponseEntity.ok(despesa.get());
		}

		@GetMapping("/filter-despesa")
		public ResponseEntity<Page<DespesaModel>> filterDespesas(
				@RequestParam(defaultValue = "0") Integer pageNo,
				@RequestParam(defaultValue = "10000") Integer pageSize,
				@RequestParam(defaultValue = "idDespesa") String sortBy,
				@RequestParam(defaultValue = "") String value) {
			Page<DespesaModel> list = service.getAllDespesasFiltered(pageNo, pageSize, sortBy, value);

			return new ResponseEntity<Page<DespesaModel>>(list, new HttpHeaders(), HttpStatus.OK);
		}

		@PostMapping
		@ResponseStatus(HttpStatus.CREATED)
		public DespesaModel create(@Valid @RequestBody DespesaModel despesa) {
			return repository.save(despesa);
		}
	}

