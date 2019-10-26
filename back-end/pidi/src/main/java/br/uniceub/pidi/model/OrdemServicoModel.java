package br.uniceub.pidi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_ordem_servico")
public class OrdemServicoModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_ordem_servico")
	private Long id_ordem_servico;
	
	@NotEmpty
	@Size(max = 500)
	@Column(name = "descricao")
	private String descricao;
	
	@NotEmpty
	@Column(name = "valor")
	private Double valor;
	
	@NotEmpty
	@Column(name = "status")
	private boolean status;
	
	@NotEmpty
	@Column(name = "id_atendente")
	private Long id_atendente;
	
	@NotEmpty
	@Column(name = "id_fornecedor")
	private Long id_fornecedor;
	
	@NotEmpty
	@Column(name = "id_cliente")
	private Long id_cliente;

	public Long getId_ordem_servico() {
		return id_ordem_servico;
	}

	public void setId_ordem_servico(Long id_ordem_servico) {
		this.id_ordem_servico = id_ordem_servico;
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

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Long getId_atendente() {
		return id_atendente;
	}

	public void setId_atendente(Long id_atendente) {
		this.id_atendente = id_atendente;
	}

	public Long getId_fornecedor() {
		return id_fornecedor;
	}

	public void setId_fornecedor(Long id_fornecedor) {
		this.id_fornecedor = id_fornecedor;
	}

	public Long getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(Long id_cliente) {
		this.id_cliente = id_cliente;
	}
	
}
