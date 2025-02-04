package br.uniceub.pidi.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_atendente")
public class AtendenteModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_atendente")
	private Long idAtendente;
	
	@NotEmpty
	@Size(max = 11)
	@Column(name = "cpf")
	private String cpf;
	
	@NotEmpty
	@Size(max = 50)
	@Column(name = "nome")
	private String nome;
	
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
	
	@ManyToOne
	@JoinColumn(name = "id")
	private UserModel id;
	
	@JsonIgnore
	@OneToMany(mappedBy = "atendente", cascade = CascadeType.ALL)
	private Set<OrdemServicoModel> ordem_servico;

	public Long getIdAtendente() {
		return idAtendente;
	}

	public void setId_atendente(Long idAtendente) {
		this.idAtendente = idAtendente;
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

	public UserModel getId() {
		return id;
	}

	public void setId(UserModel id) {
		this.id = id;
	}

	public Set<OrdemServicoModel> getOrdem_servico() {
		return ordem_servico;
	}

	public void setOrdem_servico(Set<OrdemServicoModel> ordem_servico) {
		this.ordem_servico = ordem_servico;
	}

}
