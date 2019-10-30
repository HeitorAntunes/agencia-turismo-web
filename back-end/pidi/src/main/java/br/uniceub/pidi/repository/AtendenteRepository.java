package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.uniceub.pidi.model.AtendenteModel;

public interface AtendenteRepository extends JpaRepository<AtendenteModel, Long>{
	
	Optional<AtendenteModel> findById(Long id_atendente);
	Optional<AtendenteModel> findByNome (String nome);

}
