const axios = require('axios');

async function makePostRequest(params) {

    let res = await axios.post('http://localhost:8080/users/', params);

    console.log(res.data);
}

async function createGerente(params) {
    debugger;
    let res = await axios.post('http://localhost:8080/gerente', params);
    debugger;
    return res;
}

async function getGerente() {
    debugger;
    let res = await axios.get('http://localhost:8080/gerente');
    debugger;
    return res;
}

export default createGerente;