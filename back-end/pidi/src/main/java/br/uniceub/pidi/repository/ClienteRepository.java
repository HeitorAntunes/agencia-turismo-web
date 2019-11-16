package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.uniceub.pidi.model.ClienteModel;

public interface ClienteRepository extends JpaRepository<ClienteModel, Long>{
	
	Optional<ClienteModel> findById(Long id_cliente);
	Optional<ClienteModel> findByNome(String nome);

	@Query(value = "SELECT s FROM ClienteModel s WHERE s.nome like %?1%" + "OR s.cpf like %?1%"
			+ "OR s.endereco like %?1%" + "OR s.cep like %?1%" + "OR s.estado like %?1%" + "OR s.cidade like %?1%"
			+ "OR s.email like %?1%", countQuery = "SELECT count(*) FROM ClienteModel s WHERE s.nome like %?1%"
					+ "OR s.cpf like %?1%" + "OR s.endereco like %?1%" + "OR s.cep like %?1%" + "OR s.estado like %?1%"
					+ "OR s.cidade like %?1%" + "OR s.email like %?1%", nativeQuery = false)
	Page<ClienteModel> filterCliente(@Param("value") String value, Pageable pageable);


}
