DELIMITER //
CREATE FUNCTION CalcularSalarioBruto(
    emp_id INT
)
RETURNS DECIMAL(10,2)
BEGIN
    DECLARE salario1 DECIMAL(10,2);

    -- Obtém o salário do cargo do empregado com o ID fornecido
    SELECT cargos.salario 
    INTO salario1
    FROM empregados
    JOIN cargos ON empregados.titulo = cargos.titulo AND empregados.departamento_id = cargos.departamento_id
    WHERE empregados.empregados_id = emp_id;

    -- Retorna o salário
    RETURN salario1;
END //
DELIMITER ;



SELECT nome, CalcularSalarioBruto(empregados_id) AS salario_bruto
FROM empregados
WHERE empregados_id = 1;