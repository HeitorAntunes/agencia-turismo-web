package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.uniceub.pidi.model.OrdemServicoModel;

public interface OrdemServicoRepository extends JpaRepository<OrdemServicoModel, Long> {

	Optional<OrdemServicoModel> findById(Long id_ordem_servico);

	@Query(value = "SELECT s FROM OrdemServicoModel s JOIN s.cliente c WHERE c.cpf like %?1%" + "OR c.nome like %?1%"
			+ "OR c.email like %?1%" + "OR s.data like %?1%", countQuery = "SELECT count(*) FROM OrdemServicoModel s JOIN s.cliente c WHERE c.nome like %?1%"
					+ "OR c.cpf like %?1%" + "OR c.nome like %?1%" + "OR c.email like %?1%" + "OR s.data like %?1%", nativeQuery = false)
	Page<OrdemServicoModel> filterOrdemServico(@Param("value") String value, Pageable pageable);

}
