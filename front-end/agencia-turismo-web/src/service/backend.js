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

  getAtendente() {
    return this.requester.get("/cadastro-atendente");
  }

  pesquisaAtendente(param) {
    return this.requester.get("/cadastro-atendente/filter-atendente?value=" + param);
  }

  deleteAtendente(param) {
    return this.requester.delete("/cadastro-atendente/" + param);
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
    let res = await axios.get("http://localhost:8080/cadastro-gerente");
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
    let res = await axios.get("http://localhost:8080/cadastro-fornecedor");
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

  getCliente() {
    return this.requester.get("/cadastro-cliente");
  }

  pesquisaCliente(param) {
    return this.requester.get("/cadastro-cliente/filter-cliente?value=" + param);
  }

  deleteCliente(param) {
    return this.requester.delete("/cadastro-cliente/" + param);
  }
  get(param) {
    return this.requester.get(param);
  }

  pesquisa(param) {
    return this.requester.get(param);
  }

  delete(param) {
    return this.requester.delete(param);
  }
}

  

export default Backend;
