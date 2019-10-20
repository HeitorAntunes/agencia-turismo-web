package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.uniceub.pidi.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long>{
	
	Optional<UserModel> findByNome(String nome);

}
