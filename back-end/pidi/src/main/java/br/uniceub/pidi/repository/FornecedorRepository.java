package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.uniceub.pidi.model.FornecedorModel;

public interface FornecedorRepository extends JpaRepository<FornecedorModel, Long> {
	
	Optional<FornecedorModel> findById(Long id_fornecedor);
//	Optional<FornecedorModel> findByCnpj (String cnpj);

}
