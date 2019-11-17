package br.uniceub.pidi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.uniceub.pidi.model.DespesaModel;
import br.uniceub.pidi.repository.DespesaRepository;

@Service
public class DespesaService {
	
	@Autowired
    DespesaRepository repository;
     
    public Page<DespesaModel> getAllDespesas(Integer pageNo, Integer pageSize, String sortBy)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<DespesaModel> pagedResult = repository.findAll(paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }
    
    public Page<DespesaModel> getAllDespesasFiltered(Integer pageNo, Integer pageSize, String sortBy, String value)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<DespesaModel> pagedResult = repository.filterDespesa(value, paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }

}
