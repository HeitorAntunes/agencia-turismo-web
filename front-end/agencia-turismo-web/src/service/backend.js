import axios from "axios";

async function makePostRequest(params) {

    let res = await axios.post('http://localhost:8080/users/', params);

    console.log(res.data);
}

async function createGerente(params) {
    let res = await axios.post('http://localhost:8080/gerente', params);
    return res;
}

export default createGerente;