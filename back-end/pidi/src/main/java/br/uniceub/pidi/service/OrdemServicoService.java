package br.uniceub.pidi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.uniceub.pidi.model.OrdemServicoModel;
import br.uniceub.pidi.repository.OrdemServicoRepository;

@Service
public class OrdemServicoService {

	@Autowired
    OrdemServicoRepository repository;
     
    public Page<OrdemServicoModel> getAllOrdemServicos(Integer pageNo, Integer pageSize, String sortBy)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<OrdemServicoModel> pagedResult = repository.findAll(paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }
    
    public Page<OrdemServicoModel> getAllOrdemServicosFiltered(Integer pageNo, Integer pageSize, String sortBy, String value)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<OrdemServicoModel> pagedResult = repository.filterOrdemServico(value, paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }

}

