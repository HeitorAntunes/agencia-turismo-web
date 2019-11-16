package br.uniceub.pidi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.uniceub.pidi.model.FinanceiroModel;
import br.uniceub.pidi.repository.FinanceiroRepository;

@Service
public class FinanceiroService {

	@Autowired
    FinanceiroRepository repository;
     
    public Page<FinanceiroModel> getAllFinanceiros(Integer pageNo, Integer pageSize, String sortBy)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<FinanceiroModel> pagedResult = repository.findAll(paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }
    
    public Page<FinanceiroModel> getAllFinanceirosFiltered(Integer pageNo, Integer pageSize, String sortBy, String value)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<FinanceiroModel> pagedResult = repository.filterFinanceiro(value, paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }
    
}
