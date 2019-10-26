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
@Table(name = "tb_atendente")
public class AtendenteModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_atendente")
	private Long id_atendente;
	
	@NotEmpty
	@Size(max = 11)
	@Column(name = "cpf")
	private String cpf;
	
	@NotEmpty
	@Size(max = 50)
	@Column(name = "nome")
	private String nome;
	
	@NotEmpty
	@Column(name = "data_nascimento")
	private Date data_nascimento;
	
	@NotEmpty
	@Size(max = 1)
	@Column(name = "sexo")
	private String sexo;
	
	@NotEmpty
	@Size(max =15)
	@Column(name = "telefone")
	private String telefone;
	
	@NotEmpty
	@Size(max = 70)
	@Column(name = "endereco")
	private String endereco;
	
	@NotEmpty
	@Size(max = 8)
	@Column(name = "cep")
	private String cep;
	
	@NotEmpty
	@Size(max = 2)
	@Column(name = "estado")
	private String estado;
	
	@NotEmpty
	@Size(max = 50)
	@Column(name = "cidade")
	private String cidade;
	
	@NotEmpty
	@Size(max = 50)
	@Column(name = "bairro")
	private String bairro;
	
	@NotEmpty
	@Size(max = 50)
	@Column(name = "email")
	private String email;
	
	@NotEmpty
	@Column(name = "id")
	private Long id;

	public Long getId_atendente() {
		return id_atendente;
	}

	public void setId_atendente(Long id_atendente) {
		this.id_atendente = id_atendente;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getData_nascimento() {
		return data_nascimento;
	}

	public void setData_nascimento(Date data_nascimento) {
		this.data_nascimento = data_nascimento;
	}
	
	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
