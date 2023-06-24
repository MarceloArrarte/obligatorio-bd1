-- Quien gano mas veces saliendo desde la pole position
SELECT
	CONCAT(d.surname, ' ', d.forename) AS Driver_name , 
	COUNT(re.resultId) AS wins
FROM
	results re
JOIN drivers d 
ON 
	re.driverId = d.driverId
WHERE
	re.position = 1
	AND re.grid = 1
GROUP BY
	re.driverId
ORDER BY
	wins DESC
LIMIT 1;