-- que grandes premios tuvieron los campeonatos del 1996 - 1999
SELECT c.name, r.year
FROM circuits c 
INNER JOIN races r 
ON 
	r.circuitId = c.circuitId 
WHERE r.`year` BETWEEN 1996 and 1999