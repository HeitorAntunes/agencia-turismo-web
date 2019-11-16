import axios from "axios";

class Backend {
  requester = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 30000,
    headers: {
      "Content-Type": "application/json"
    }
  });

  createAtendente(params) {
    return this.requester
      .post("/cadastro-atendente", params)
      .then(res => {
        alert("Atendente cadastrado com sucesso!!");
      })
      .catch(err => {
        alert("Erro ao cadastrar, tente novamente!");
      });
  }

  createGerente(params) {
    return this.requester
      .post("/cadastro-gerente", params)
      .then(res => {
        alert("Gerente cadastrado com sucesso!!");
      })
      .catch(err => {
        alert("Erro ao cadastrar, tente novamente!");
      });
  }

  async getGerente() {
    debugger;
    let res = await axios.get("http://localhost:8080/cadastro-gerente");
    debugger;
    return res;
  }

  async getAtendente() {
    debugger;
    let res = await axios.get("http://localhost:8080/cadastro-atendente");
    debugger;
    return res;
  }

  createFornecedor(params) {
    return this.requester
      .post("/cadastro-fornecedor", params)
      .then(res => {
        alert("Fornecedor cadastrado com sucesso!!");
      })
      .catch(err => {
        alert("Erro ao cadastrar, tente novamente!");
      });
  }

  async getFornecedor() {
    debugger;
    let res = await axios.get("http://localhost:8080/cadastro-fornecedor");
    debugger;
    return res;
  }

  createCliente(params) {
    return this.requester
      .post("/cadastro-cliente", params)
      .then(res => {
        alert("Cliente cadastrado com sucesso!!");
      })
      .catch(err => {
        alert("Erro ao cadastrar, tente novamente!");
      });
  }

  async getCliente() {
    debugger;
    let res = await axios.get("http://localhost:8080/cadastro-cliente");
    debugger;
    return res;
  }
}

export default Backend;
