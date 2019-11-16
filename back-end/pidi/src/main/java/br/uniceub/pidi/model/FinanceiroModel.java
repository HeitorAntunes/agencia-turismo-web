package br.uniceub.pidi.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tbFinanceiro")
public class FinanceiroModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_financeiro")
	private Long idFinanceiro;

	@Column(name = "data")
	private Date data;

	@NotEmpty
	@Size(max = 500)
	@Column(name = "descricao")
	private String descricao;

	@Column(name = "valor")
	private Double valor;

	@Column(name = "tipo")
	private boolean tipo;

	@ManyToOne
	@JoinColumn(name = "id_gerente")
	private GerenteModel gerente;

	public Long getIdFinanceiro() {
		return idFinanceiro;
	}

	public void setIdFinanceiro(Long idFinanceiro) {
		this.idFinanceiro = idFinanceiro;
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

	public GerenteModel getGerente() {
		return gerente;
	}

	public void setGerente(GerenteModel gerente) {
		this.gerente = gerente;
	}

}
