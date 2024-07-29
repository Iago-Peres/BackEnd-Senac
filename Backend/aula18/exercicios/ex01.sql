--produto
CREATE DATABASE desafio_iagoperes;
CREATE TABLE produtos(
    categoria VARCHAR(30),
    data_fabricacao DATE,
    data_vencimento DATE,
    fabricado_em VARCHAR(30),
    marca VARCHAR (30),
    nome VARCHAR(30),
    preco INT,
    produto_id AUTO_INCREMENT PRIMARY KEY
);

INSERT INTO 'produtos'('categoria','data_fabricacao','data_vencimento','fabricado_em','marca','nome','preco','sem_estoque') VALUES ('categoria1','2000-01-01','2001-01-01','RioGrandeDoSul','marca1','nome1','123');

-- INSERT INTO 'produtos'('categoria','data_fabricacao','data_vencimento','fabricado_em','marca','nome','preco','sem_estoque') VALUES ('categoria1','2000-01-01','2001-01-01','RioGrandeDoSul','marca1','nome1','123','0'); para produto 2, 3, 4, 5, 6, 7, 8, 9, 10 alterando os valores dentro de VALUES() para cada produto a ser adicionado a tabela --

-- DELETE FROM 'produtos' WHERE produto_id == 4 (para deletar o 4º registro da tabela)
-- DELETE FROM 'produtos' WHERE produto_id == 7 (para deletar o 7º registro da tabela)

-- ALTER TABLE produtos ADD com_estoque BOOLEAN; (adiciona a coluna com_estoque do tipo boolean)

-- UPDATE produtos SET com_estoque = 1 WHERE produto_id != 2; 

-- SELECT * FROM produtos ORDER BY produto_id, com_estoque ASC LIMIT 5; (exibe os 5 primeiros registros em order de inserção e de acordo com o estoque)