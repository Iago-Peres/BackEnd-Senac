CREATE TABLE IF NOT EXISTS carros_aluguel(
    carro_id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(20),
    marca VARCHAR(20),
    cor VARCHAR(15),
    preco_por_dia INT,
    categoria VARCHAR(30),
    ano INT
);

INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo1','marca1','vermelho',300,'off-road',2010);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo2','marca2','azul',300,'off-road',2011);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo3','marca3','verde',350,'sedan',2012);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo4','marca4','amarelo',200,'popular',2010);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo5','marca6','vermelho',250,'off-road',2009);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo6','marca6','preto',300,'passeio',2020);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo7','marca7','branco',150,'off-road',2005);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo7','marca7','branco',150,'off-road',2005);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo7','marca7','branco',150,'off-road',2005);
INSERT INTO carros_aluguel(modelo,marca,cor,preco_por_dia,categoria,ano)
VALUES('modelo7','marca7','branco',150,'off-road',2005);

CREATE TABLE IF NOT EXISTS clientes(
    cliente_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50),
    sobrenome VARCHAR(50),
    data_nascimento DATE,
    genero CHAR(),
    cidade VARCHAR(50)
);

INSERT INTO clientes(nome,sobrenome,data_nascimento,genero,cidade)
VALUES('nome1','sobrenome1','2001-01-01','M','cidade1'); 
INSERT INTO clientes(nome,sobrenome,data_nascimento,genero,cidade)
VALUES('nome2','sobrenome2','2002-02-02','F','cidade2'); 
INSERT INTO clientes(nome,sobrenome,data_nascimento,genero,cidade)
VALUES('nome3','sobrenome3','2003-03-03','M','cidade5'); 
INSERT INTO clientes(nome,sobrenome,data_nascimento,genero,cidade)
VALUES('nome2','sobrenome2','2004-04-04','F','cidade40'); 
INSERT INTO clientes(nome,sobrenome,data_nascimento,genero,cidade)
VALUES('nome4','sobrenome4','2001-07-05','M','cidade1'); 

CREATE TABLE IF NOT EXISTS alugueis_de_carros(
    carro_id INT,
    cliente_id INT,
    data_aluguel DATE,
    data_devolucao DATE,
    valor_total INT,

    FOREIGN KEY (carro_id) REFERENCES carros_aluguel(carro_id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(1,1,'2020-04-10','2020-04-17',2100);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(2,1,'2020-04-18','2020-04-25',2100);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(3,1,'2020-04-25','2020-04-27',700);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(4,1,'2020-04-27','2020-04-30',600);

INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(10,2,'2020-01-1','2020-01-6',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(10,2,'2020-01-7','2020-01-12',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(10,2,'2020-01-13','2020-01-19',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(10,2,'2020-01-20','2020-01-25',900);

INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(10,3,'2020-01-1','2020-01-6',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(10,3,'2020-01-7','2020-01-12',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(10,3,'2020-01-13','2020-01-19',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(10,3,'2020-01-20','2020-01-25',900);


INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(9,4,'2020-01-1','2020-01-6',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(9,4,'2020-01-7','2020-01-12',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(9,4,'2020-01-13','2020-01-19',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(9,4,'2020-01-20','2020-01-25',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(9,4,'2020-01-26','2020-01-31',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(9,4,'2020-02-1','2020-02-05',900);

INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(5,5,'2020-01-1','2020-01-6',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(5,5,'2020-01-7','2020-01-12',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(5,5,'2020-01-13','2020-01-19',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(5,5,'2020-01-20','2020-01-25',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(9,5,'2020-02-06','2020-02-11',900);
INSERT INTO alugueis_de_carros(carro_id,cliente_id,data_aluguel, data_devolucao, valor_total)
VALUES(9,5,'2020-02-12','2020-02-17',900);

SELECT cliente_id, carro_id, valor_total SUM FROM clientes INNER JOIN alugueis_de_carros; 
