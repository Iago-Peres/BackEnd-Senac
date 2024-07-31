-- 1.Escreva uma consulta SQL para selecionar o departamento_id e a soma dos salários para cada departamento. Filtre os departamentos onde a soma total dos salários é maior que R$ 12.000,00. --

SELECT departamentos.departamento_id, SUM(cargos.salario) AS total_em_salarios FROM departamentos
INNER JOIN cargos 
ON departamentos.departamento_id = cargos.departamento_id
GROUP BY departamento_id
HAVING SUM(cargos.salario) > 12000; 
--------------------------------------------------------------

-- 2.Escreva uma consulta SQL para selecionar o titulo e o número de empregados para cada título. Filtre os títulos onde há mais de 2 empregados. --

SELECT titulo, COUNT(titulo) FROM cargos
GROUP BY titulo
HAVING COUNT(titulo) > 2; 
-- não ha titulos com mais de 2 empregados --
--------------------------------------------------------------

-- 3.Escreva uma consulta SQL para selecionar o departamento_id e a média dos salários para cada departamento. Filtre os departamentos onde a média salarial é maior que R$ 4.500,00. --

SELECT departamentos.departamento_id, AVG(cargos.salario) AS media_salarial FROM departamentos
INNER JOIN cargos 
ON departamentos.departamento_id = cargos.departamento_id
GROUP BY departamento_id
HAVING AVG(cargos.salario) > 4500;
--------------------------------------------------------------

-- 4.Escreva uma consulta SQL para selecionar o departamento_id e o maior salário para cada departamento. Filtre os departamentos onde o maior salário é superior a R$ 6.000,00. --

SELECT departamentos.departamento_id, MAX(cargos.salario) AS maiores_que_6000 FROM departamentos
INNER JOIN cargos 
ON departamentos.departamento_id = cargos.departamento_id
GROUP BY departamento_id
HAVING MAX(cargos.salario) > 6000;
--------------------------------------------------------------

-- 5.Escreva uma consulta SQL para selecionar o departamento_id e o menor salário para cada departamento. Filtre os departamentos onde o menor salário é superior a R$ 2.500,00.--

SELECT departamentos.departamento_id, MIN(cargos.salario) AS menores_salarios FROM departamentos
INNER JOIN cargos 
ON departamentos.departamento_id = cargos.departamento_id
GROUP BY departamento_id
HAVING MIN(cargos.salario) > 2500;