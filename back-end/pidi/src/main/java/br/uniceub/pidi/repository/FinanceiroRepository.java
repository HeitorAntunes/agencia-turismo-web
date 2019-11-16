package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.uniceub.pidi.model.FinanceiroModel;

public interface FinanceiroRepository extends JpaRepository<FinanceiroModel, Long> {

	Optional<FinanceiroModel> findById (Long id_financeiro);
	
	@Query(value = "SELECT s FROM FinanceiroModel s JOIN s.gerente u WHERE s.descricao like %?1%"
			+ "OR s.valor like %?1%"
			+ "OR s.data like %?1%"
			+ "OR u.nome like %?1%",
    countQuery = "SELECT count(*) FROM FinanceiroModel s JOIN s.gerente u WHERE s.descricao like %?1%"
    		+ "OR s.data like %?1%"
    		+ "OR s.valor like %?1%"
    		+ "OR u.nome like %?1%",
    nativeQuery = false)
	Page<FinanceiroModel> filterFinanceiro(@Param("value") String value, Pageable pageable);

}