package br.uniceub.pidi.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_financeiro")
public class FinanceiroModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_financeiro;
	
	@NotEmpty
	@Column(name = "data")
	private Date data;
	
	@NotEmpty
	@Size(max = 500)
	@Column(name = "descricao")
	private String descricao;
	
	@NotEmpty
	@Column(name = "valor")
	private Double valor;
	
	@NotEmpty
	@Column(name = "tipo")
	private boolean tipo;
	
	@NotEmpty
	@Column(name = "id_gerente")
	private Long id_gerente;

	public Long getId_financeiro() {
		return id_financeiro;
	}

	public void setId_financeiro(Long id_financeiro) {
		this.id_financeiro = id_financeiro;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
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

	public boolean isTipo() {
		return tipo;
	}

	public void setTipo(boolean tipo) {
		this.tipo = tipo;
	}

	public Long getId_gerente() {
		return id_gerente;
	}

	public void setId_gerente(Long id_gerente) {
		this.id_gerente = id_gerente;
	}
	
}

