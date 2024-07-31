CREATE TABLE IF NOT EXISTS departamentos (
	departamento_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS empregados (
	empregados_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(departamento_id)
);

INSERT INTO departamento (nome) VALUES ('nome1'),('marketing'),('ti'),('recursos humanos')