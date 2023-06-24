-- Cuántas carreras ganó Jacques Villenueve?
SELECT
	COUNT(*) AS Carreras_ganadas
FROM
	results re
INNER JOIN drivers d
ON
	re.driverId = d.driverId
WHERE
	d.forename = 'Jacques'
	AND d.surname = 'Villeneuve'
	AND re.position = 1;