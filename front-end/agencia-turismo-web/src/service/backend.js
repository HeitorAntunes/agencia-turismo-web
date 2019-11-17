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
      
  }

  async getGerente() {
    let res = await axios.get("http://localhost:8080/cadastro-gerente");
    return res;
  }

  createFornecedor(params) {
    return this.requester
      .post("/cadastro-fornecedor", params)
  }

  getFornecedor() {
    return this.requester.get("/cadastro-fornecedor");
  }

  pesquisaFornecedor (param) {
    return this.requester.get("/cadastro-fornecedor/filter-fornecedor?value=" + param);
  }

  deleteFornecedor (param) {
    return this.requester.delete("/cadastro-fornecedor/" + param);
  }

  createCliente(params) {
    return this.requester
      .post("/cadastro-cliente", params)
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

  post(url, param) {
    return this.requester.post(url, param);
  }

  pesquisa(param) {
    return this.requester.get(param);
  }

  delete(param) {
    return this.requester.delete(param);
  }

  update(url, param) {
    return this.requester.put(url, param);
  }
}

export default Backend;
