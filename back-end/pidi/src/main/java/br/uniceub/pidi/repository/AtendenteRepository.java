package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.uniceub.pidi.model.AtendenteModel;

public interface AtendenteRepository extends JpaRepository<AtendenteModel, Long> {

	Optional<AtendenteModel> findById(Long id_atendente);
	Optional<AtendenteModel> findByNome(String nome);

	@Query(value = "SELECT s FROM AtendenteModel s JOIN s.id u WHERE s.nome like %?1%" + "OR s.cpf like %?1%"
			+ "OR s.endereco like %?1%" + "OR s.cep like %?1%" + "OR s.estado like %?1%" + "OR s.cidade like %?1%"
			+ "OR s.email like %?1%", countQuery = "SELECT count(*) FROM AtendenteModel s JOIN s.id u WHERE s.nome like %?1%"
					+ "OR s.cpf like %?1%" + "OR s.endereco like %?1%" + "OR s.cep like %?1%" + "OR s.estado like %?1%"
					+ "OR s.cidade like %?1%" + "OR s.email like %?1%", nativeQuery = false)
	Page<AtendenteModel> filterAtendente(@Param("value") String value, Pageable pageable);

}
