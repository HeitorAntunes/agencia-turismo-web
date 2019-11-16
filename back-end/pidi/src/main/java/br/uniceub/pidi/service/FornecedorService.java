package br.uniceub.pidi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.uniceub.pidi.model.FornecedorModel;
import br.uniceub.pidi.repository.FornecedorRepository;

@Service
public class FornecedorService {
	
	@Autowired
    FornecedorRepository repository;
     
    public Page<FornecedorModel> getAllFornecedores(Integer pageNo, Integer pageSize, String sortBy)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<FornecedorModel> pagedResult = repository.findAll(paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }
    
    public Page<FornecedorModel> getAllFornecedorsFiltered(Integer pageNo, Integer pageSize, String sortBy, String value)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<FornecedorModel> pagedResult = repository.filterFornecedor(value, paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }

}
