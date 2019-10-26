package br.uniceub.pidi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.uniceub.pidi.model.FinanceiroModel;

public interface FinanceiroRepository extends JpaRepository<FinanceiroModel, Long> {

	Optional<FinanceiroModel> findById (Long id_financeiro);
}
