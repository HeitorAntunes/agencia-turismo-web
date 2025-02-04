package br.uniceub.pidi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_ordem_servico")
public class OrdemServicoModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_ordem_servico")
	private Long idOrdemServico;

	@NotEmpty
	@Size(max = 500)
	@Column(name = "descricao")
	private String descricao;
	
	@NotNull
	@Column(name = "valor")
	private Double valor;

	@NotEmpty
	@Size(max = 10)
	@Column(name = "data")
	private String data;
	
	@NotEmpty
	@Size(max = 2)
	@Column(name = "status")
	private String status;

	@ManyToOne
	@JoinColumn(name = "id_cliente")
	private ClienteModel cliente;
	
	@ManyToOne
	@JoinColumn(name = "id_atendente")
	private AtendenteModel atendente;
	
	@ManyToOne
	@JoinColumn(name = "id_fornecedor")
	private FornecedorModel fornecedor;

	public Long getIdOrdemServico() {
		return idOrdemServico;
	}

	public void setId_ordem_servico(Long idOrdemservico) {
		this.idOrdemServico = idOrdemservico;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public ClienteModel getCliente() {
		return cliente;
	}

	public void setCliente(ClienteModel cliente) {
		this.cliente = cliente;
	}

	public FornecedorModel getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(FornecedorModel fornecedor) {
		this.fornecedor = fornecedor;
	}

	public AtendenteModel getAtendente() {
		return atendente;
	}

	public void setAtendente(AtendenteModel atendente) {
		this.atendente = atendente;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setIdOrdemServico(Long idOrdemServico) {
		this.idOrdemServico = idOrdemServico;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
	

}
