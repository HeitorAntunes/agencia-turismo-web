package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.uniceub.pidi.model.FornecedorModel;

public interface FornecedorRepository extends JpaRepository<FornecedorModel, Long> {
	
	Optional<FornecedorModel> findById(Long id_fornecedor);
//	Optional<FornecedorModel> findByCnpj (String cnpj);
	
	@Query(value = "SELECT s FROM FornecedorModel s WHERE s.nome like %?1%" + "OR s.cnpj like %?1%"
			+ "OR s.endereco like %?1%" + "OR s.cep like %?1%" + "OR s.estado like %?1%" + "OR s.cidade like %?1%"
			+ "OR s.email like %?1%", countQuery = "SELECT count(*) FROM FornecedorModel s WHERE s.nome like %?1%"
					+ "OR s.cnpj like %?1%" + "OR s.endereco like %?1%" + "OR s.cep like %?1%" + "OR s.estado like %?1%"
					+ "OR s.cidade like %?1%" + "OR s.email like %?1%", nativeQuery = false)
	Page<FornecedorModel> filterFornecedor(@Param("value") String value, Pageable pageable);

}
