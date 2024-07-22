CREATE TABLE clientes 
( 
 -- nome    /tipo/ caracteristicas   
 id_cliente INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(n) NOT NULL,  
 email VARCHAR(n) NOT NULL,  
 telefone INT NOT NULL,  
 endereco VARCHAR(n),  
 id_pedidos INT,  
 UNIQUE (email,telefone)
); 

CREATE TABLE pedidos 
( 
 id_pedido INT PRIMARY KEY AUTO_INCREMENT,  
 id_cliente INT,  
 data_pedido DATE,  
 total INT NOT NULL,  
); 

CREATE TABLE itens_do_pedido 
( 
 id_item INT PRIMARY KEY AUTO_INCREMENT,  
 id_pedido INT,  
 id_produto INT,  
 quantidade INT NOT NULL,  
); 

CREATE TABLE produtos 
( 
 id_produto INT PRIMARY KEY AUTO_INCREMENT,  
 nome_produto VARCHAR(n) NOT NULL,  
 preco FLOAT NOT NULL,  
 estoque INT NOT NULL,  
 id_categoria INT,  
 UNIQUE (nome_produto)
); 

CREATE TABLE categoria 
( 
 id_categoria INT PRIMARY KEY AUTO_INCREMENT,  
 nome_categoria VARCHAR(n) NOT NULL,  
 UNIQUE (nome_categoria)
); 

ALTER TABLE clientes ADD FOREIGN KEY(telefone) REFERENCES undefined (telefone)
ALTER TABLE clientes ADD FOREIGN KEY(id_pedidos) REFERENCES clientes (id_pedidos)
ALTER TABLE pedidos ADD FOREIGN KEY(id_cliente) REFERENCES clientes (id_cliente)
ALTER TABLE itens_do_pedido ADD FOREIGN KEY(id_pedido) REFERENCES pedidos (id_pedido)
ALTER TABLE itens_do_pedido ADD FOREIGN KEY(id_produto) REFERENCES produtos (id_produto)
ALTER TABLE produtos ADD FOREIGN KEY(id_categoria) REFERENCES clientes (id_categoria)


--SELECT AVG(valor_total) FROM Pedidos; retorna media
--SELECT SUM(valor_total) FROM Pedidos; retorna soma dos valores da coluna
--SELECT MAX(valor_total) FROM Pedidos; retorna o maior numero

--SELECT clientes.id_cliente, clientes.nome, clientes.email_cliente, Pedidos.numero_pedido FROM clientes LEFT JOIN Pedidos ON clientes.id_cliente = Pedidos.id_cliente ORDER BY id_pedido ASC; retorna dados de ambas as tabelas mesmo sem teremm ligação

--SELECT clientes.id_cliente, clientes.nome, clientes.email_cliente, Pedidos.numero_pedido FROM clientes INNER JOIN Pedidos ON clientes.id_cliente = Pedidos.id_cliente ORDER BY id_pedido ASC; retorna dados de ambas as tabelas que ligação

-- GROUP BY, seleciona por grupos
-- COUNT conta o numero total de registros na tabela