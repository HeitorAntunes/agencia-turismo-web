package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.uniceub.pidi.model.DespesaModel;

public interface DespesaRepository extends JpaRepository<DespesaModel, Long> {

	Optional<DespesaModel> findById(Long idDespesa);

	@Query(value = "SELECT s FROM DespesaModel s WHERE s.data like %?1%"
			+ "OR s.descricao like %?1%", countQuery = "SELECT count(*) FROM DespesaModel s WHERE s.data like %?1%"
					+ "OR s.descricao like %?1%", nativeQuery = false)
	Page<DespesaModel> filterDespesa(@Param("value") String value, Pageable pageable);

}
