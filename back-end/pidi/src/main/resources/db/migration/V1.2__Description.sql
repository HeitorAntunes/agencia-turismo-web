CREATE TABLE TB_USER(
    id serial PRIMARY KEY,
    login VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL
);

CREATE TABLE TB_ATENDENTE(
    id_atendente serial PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    data_nascimento date NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    endereco VARCHAR(70) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    id integer NOT NULL,
    CONSTRAINT tb_atendente_user_fkey FOREIGN KEY(id)
        REFERENCES TB_USER(id)
);

CREATE TABLE TB_GERENTE(
    id_gerente serial PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    data_nascimento date NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    endereco VARCHAR(70) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    id integer NOT NULL,
    CONSTRAINT tb_gerente_user_fkey FOREIGN KEY(id)
        REFERENCES TB_USER(id)
);

CREATE TABLE TB_CLIENTE(
    id_cliente serial PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    data_nascimento date NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    endereco VARCHAR(70) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE TB_FORNECEDOR(
    id_fornecedor serial PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cnpj VARCHAR(14) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    endereco VARCHAR(70) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    cidade VARCHAR(2) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE TB_FINANCEIRO(
    id_financeiro serial PRIMARY KEY,
    data date NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    valor double precision NOT NULL,
    tipo boolean NOT NULL,
    id_gerente integer NOT NULL,
    CONSTRAINT tb_financeiro_gerente_fkey FOREIGN KEY(id_gerente)
        REFERENCES TB_GERENTE (id_gerente)
);

CREATE TABLE TB_ORDEM_SERVICO(
    id_ordem_servico serial PRIMARY KEY,
    descricao VARCHAR(500) NOT NULL,
    valor double precision NOT NULL,
    status boolean NOT NULL,
    id_atendente integer NOT NULL,
    id_fornecedor integer NOT NULL,
    id_cliente integer NOT NULL,
    CONSTRAINT tb_ordem_servico_atendente_fkey FOREIGN KEY(id_atendente)
        REFERENCES TB_ATENDENTE (id_atendente),
    CONSTRAINT tb_ordem_servico_fornecedor_fkey FOREIGN KEY(id_fornecedor)
        REFERENCES TB_FORNECEDOR (id_fornecedor),
    CONSTRAINT tb_ordem_servico_cliente_fkey FOREIGN KEY(id_cliente)
        REFERENCES TB_CLIENTE (id_cliente)
);