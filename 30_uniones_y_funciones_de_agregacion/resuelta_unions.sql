-- JOINS (Desafio 1)

-- ej 1 Mostrar el título y el género de todas las series
	SELECT series.title, genres.name FROM series, genres
	WHERE  genre_id = genres.id
    -- otra solucion
	SELECT series.title, genres.name FROM series
	INNER JOIN genres ON  genre_id = genres.id

-- ej 2 Mostrar el titulo de los episodios, el nombre y apellido de los actores que trabajan en cada uno de ellos
	SELECT title, first_name, last_name FROM episodes, actor_episode, actors
	WHERE  episode_id = episodes.id
	 AND actor_id = actors.id
    -- otra solucion
     SELECT title, first_name, last_name FROM episodes
	INNER JOIN actor_episode ON episode_id = episodes.id
	INNER JOIN actors ON  actor_id = actors.id

-- DISTINCTS (Desafio 2)
-- ej 3 Mostrar solo nombre y apellido de los actores que trabajen el todas las peliculas de la guerra de las galaxias y que estos no se repitan
	SELECT DISTINCT first_name, last_name FROM movies
	INNER JOIN actor_movie ON movie_id = movies.id
	INNER JOIN actors ON  actor_id = actors.id
	WHERE title LIKE "%guerra%"

-- COALESCE (Desafio 3)
-- ej 4 Mostrar el titulo de cada pelicula con su género correspondiente, en el caso de que no tenga género que imprima "no tiene género"
	SELECT title, COALESCE( name, "No tiene género") FROM movies
	LEFT JOIN genres ON genre_id = genres.id
    
--  DATEDIFF (Desafio 4)
-- ej 5 mostrar el titulo de cada serie y en la segunda columna (a la cual llamaremos: duracion) la cantidad de dias desde su estreno hasta su fin
	SELECT title, DATEDIFF(end_date, release_date) AS duracion FROM series
    
-- LENGTH (Desafio 5)
-- ej 6 Mostrar todos los actores cuyos nombre sean mayor a 6 caracteres, ordenados de la A a la Z
	SELECT * FROM actors WHERE LENGTH(first_name) > 6 ORDER BY first_name 

-- COUNT
-- ej 7 Mostrar la cantidad total de episodios
	SELECT COUNT(*) FROM episodes

-- GROUP BY
-- ej 8 Mostar el titulo de todas las series y el total de temporadas que tiene cada una de ellas.
	SELECT series.title, COUNT(seasons.title)  AS temporadas FROM series
	INNER JOIN seasons ON serie_id = series.id
	GROUP BY series.title 

-- HAVING
-- ej 9  Mostrar el nombre de todos los géneros y la cantidad total de peliculas por cada uno siempre que sea mayor o igual a 3
	SELECT name, COUNT(*) FROM movies
	INNER JOIN genres ON genre_id = genres.id
	GROUP BY name
	HAVING COUNT(*) >= 3
