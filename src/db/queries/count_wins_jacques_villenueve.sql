-- Cuántas carreras ganó Jacques Villenueve?
SELECT
	COUNT(*) AS Carreras_ganadas
FROM
	results re
INNER JOIN drivers d
ON
	re.driverId = d.driverId
WHERE
	d.driverId = 35
	AND re.position = 1;