WITH
	-- Indica puntaje y posición final de cada constructor en los años en que participó
	constructors_championships_results AS (
		SELECT
			cs.constructorId,
			r.`year`,
			MAX(cs.points) AS "final_score",
			ROW_NUMBER() OVER (					
				PARTITION BY r.`year`			-- Numero los puntajes finales dentro de cada año
				ORDER BY MAX(cs.points) DESC	-- de mayor a menor
			) AS "final_position"
		FROM constructor_standings cs
		INNER JOIN races r
			ON r.raceId = cs.raceId
		GROUP BY r.`year`, cs.constructorId
	),
	-- Indica cantidad de campeonatos ganados por cada constructor
	constructors_championships_wins AS (
		SELECT
			ccr.constructorId,
			COUNT(*) AS "wins"
		FROM constructors_championships_results ccr
		WHERE
			ccr.final_position = 1			-- Nos quedamos con los primeros puestos
			AND ccr.`year` < YEAR(NOW())	-- Excluimos la temporada en curso
		GROUP BY constructorId
	)
-- Query principal
SELECT
	c.name AS "Constructor",
	ccw.wins AS "Campeonatos ganados"
FROM constructors_championships_wins ccw
INNER JOIN constructors c
	ON c.constructorId = ccw.constructorId
WHERE ccw.wins = (
	SELECT MAX(ccw.wins)
	FROM constructors_championships_wins ccw
) 
ORDER BY c.name ASC;