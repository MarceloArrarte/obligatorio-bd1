WITH
	-- Indica la cantidad de Grandes Premios ganados por cada corredor en cada circuito
	-- y su posición en dicho ranking
	grand_prix_wins_per_circuit AS (
		SELECT
			d.driverId,
			ra.circuitId,
			COUNT(*) AS wins,
			ROW_NUMBER() OVER (
				PARTITION BY ra.circuitId
				ORDER BY COUNT(*) DESC
			) AS "win_count_ranking"
		FROM results re
		INNER JOIN drivers d
			ON d.driverId = re.driverId
		INNER JOIN races ra
			ON ra.raceId = re.raceId
		WHERE position = 1
		GROUP BY d.driverId, ra.circuitId
	)
SELECT
	c.name AS "Circuito",
	CONCAT(d.forename, ' ', d.surname) AS "Corredor",
	gpwpc.wins AS "Grandes Premios ganados"
FROM grand_prix_wins_per_circuit gpwpc
INNER JOIN drivers d
	ON d.driverId = gpwpc.driverId
INNER JOIN circuits c
	ON c.circuitId = gpwpc.circuitId
WHERE
	gpwpc.win_count_ranking = 1
	AND gpwpc.wins = (
		SELECT MAX(wins)
		FROM grand_prix_wins_per_circuit gpwpc_sq
		WHERE gpwpc_sq.circuitId = gpwpc.circuitId
	)
ORDER BY gpwpc.wins DESC;