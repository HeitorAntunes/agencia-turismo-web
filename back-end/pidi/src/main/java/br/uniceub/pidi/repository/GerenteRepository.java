package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.uniceub.pidi.model.GerenteModel;

public interface GerenteRepository extends JpaRepository<GerenteModel, Long> {
	
	Optional<GerenteModel> findById(Long id_gerente);
//	Optional<GerenteModel> findByCpf(String cpf);
	
	
	

}
