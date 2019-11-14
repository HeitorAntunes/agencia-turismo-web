const axios = require('axios');

async function makePostRequest(params) {

    let res = await axios.post('http://localhost:8080/users/', params);

    console.log(res.data);
}

async function createGerente(params) {
    debugger;
    let res = await axios.post('http://localhost:8080/cadastro-gerente', params);
    debugger;
    return res;
}

async function getGerente() {
    debugger;
    let res = await axios.get('http://localhost:8080/cadastro-gerente');
    debugger;
    return res;
}

async function createAtendente(params) {
    debugger;
    let res = await axios.post('http://localhost:8080/cadastro-atendente', params);
    debugger;
    return res;
}

async function getAtendente() {
    debugger;
    let res = await axios.get('http://localhost:8080/cadastro-atendente');
    debugger;
    return res;
}

async function createFornecedor(params) {
    debugger;
    let res = await axios.post('http://localhost:8080/cadastro-fornecedor', params);
    debugger;
    return res;
}

async function getFornecedor() {
    debugger;
    let res = await axios.get('http://localhost:8080/cadastro-fornecedor');
    debugger;
    return res;
}

async function createCliente(params) {
    debugger;
    let res = await axios.post('http://localhost:8080/cadastro-cliente', params);
    debugger;
    return res;
}

async function getCliente() {
    debugger;
    let res = await axios.get('http://localhost:8080/cadastro-cliente');
    debugger;
    return res;
}

export default createGerente;