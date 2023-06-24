WITH
	-- Indica puntaje y posición final de cada corredor en los años en que participó
	drivers_championships_results AS (
		SELECT
			ds.driverId,
			r.`year`,
			MAX(ds.points) AS "final_score",
			ROW_NUMBER() OVER (					
				PARTITION BY r.`year`			-- Numero los puntajes finales dentro de cada año
				ORDER BY MAX(ds.points) DESC	-- de mayor a menor
			) AS "final_position"
		FROM driver_standings ds
		INNER JOIN races r
			ON r.raceId = ds.raceId
		GROUP BY r.`year`, ds.driverId
	),
	-- Indica cantidad de campeonatos ganados por cada conductor
	drivers_championships_wins AS (
		SELECT
			dcr.driverId,
			COUNT(*) AS "wins"
		FROM drivers_championships_results dcr
		WHERE
			dcr.final_position = 1			-- Nos quedamos con los primeros puestos
			AND dcr.`year` < YEAR(NOW())	-- Excluimos la temporada en curso
		GROUP BY driverId
	)
-- Query principal
SELECT
	CONCAT(d.forename, ' ', d.surname) AS "Corredor",
	dcw.wins AS "Campeonatos ganados"
FROM drivers_championships_wins dcw
INNER JOIN drivers d
	ON d.driverId = dcw.driverId
WHERE dcw.wins = (
	SELECT MAX(dcw.wins)
	FROM drivers_championships_wins dcw
)
ORDER BY CONCAT(d.forename, ' ', d.surname) ASC;