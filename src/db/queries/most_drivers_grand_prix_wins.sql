-- que piloto ganos mas veces un gran premio
SELECT
	CONCAT(d.surname, ' ', d.forename) AS name ,
	COUNT(d.driverId) AS grand_prix_wins
FROM
	results r
INNER JOIN drivers d 
ON
	d.driverId = r.driverId
where
	r.`position` = 1
GROUP by
	name
ORDER BY
	grand_prix_wins DESC
LIMIT 1
	