package br.uniceub.pidi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
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

import br.uniceub.pidi.model.LoginModel;
import br.uniceub.pidi.model.UserModel;
import br.uniceub.pidi.repository.UserRepository;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/cadastro-user")
public class UserController {

	@Autowired
	private UserRepository repository;

	@GetMapping
	public List<UserModel> list() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<UserModel> get(@PathVariable Long id) {
		Optional<UserModel> user = repository.findById(id);

		if (user == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(user.get());
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public UserModel create(@Valid @RequestBody UserModel user) {
		Optional<UserModel> existingUser = repository.findById(user.getId());

		if (existingUser.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Já existe um User com este username");
		}

		return repository.save(user);
	}

	@PutMapping
	@ResponseStatus(HttpStatus.ACCEPTED)
	public ResponseEntity<UserModel> update(@Valid @RequestBody UserModel user) {
		Optional<UserModel> newUser = repository.findById(user.getId());

		if (newUser == null) {
			return ResponseEntity.notFound().build();
		} else {
			this.repository.save(user);
			return ResponseEntity.ok().build();
		}
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<UserModel> delete(@PathVariable Long id) {
		repository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/login")
	@ResponseStatus(HttpStatus.OK)
	public UserModel login(@Valid @RequestBody LoginModel user) {
		Optional<UserModel> existingUser = repository.findByLoginAndPassword(user.getLogin(), user.getPassword());

		if (!existingUser.isPresent()) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
					"Usuário ou senha incorretos!");
			
		}

		return existingUser.get();
	}

}
