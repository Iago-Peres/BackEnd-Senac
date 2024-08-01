
BEGIN
    DECLARE titulo_existe INT;
    SELECT COUNT(*)
    INTO titulo_existe
    FROM cargos
    WHERE titulo = novo_titulo;
    IF titulo_existe > 0 THEN
    UPDATE empregados
    SET titulo = novo_titulo
	WHERE empregados_id = empregado_id;
    END IF;
END




BEGIN
    UPDATE empregados
    SET departamento_id = depart_id
	WHERE empregados_id = empregado_id;
END




BEGIN
    UPDATE cargos 
    SET salario = salario + (salario * (percentual / 100))
    WHERE departamento_id = dep_id;
END

