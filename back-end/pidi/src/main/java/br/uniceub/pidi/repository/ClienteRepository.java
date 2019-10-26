package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.uniceub.pidi.model.ClienteModel;

public interface ClienteRepository extends JpaRepository<ClienteModel, Long>{
	
	Optional<ClienteModel> findByNome(String nome);
	Optional<ClienteModel> findByCpf(String cpf);

}
