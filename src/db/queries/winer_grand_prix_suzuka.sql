-- Quién ganó el Gran Premio de Suzuka, de 1997?
SELECT
	CONCAT(d.surname, ' ', d.forename) AS Driver_name
FROM
	drivers d
INNER JOIN results re
ON
	re.driverId = d.driverId
INNER JOIN races ra 
ON
	ra.raceId = re.raceId
INNER JOIN circuits c 
ON
	ra.circuitId = c.circuitId
WHERE
	c.name = "Suzuka Circuit"
	AND ra.`year` = 1997
	AND re.`position` = 1