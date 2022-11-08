--Obtenez une liste de toutes les langues cinématographiques.
SELECT name FROM language;

--2)Obtenez une liste de tous les films joints avec leurs langues - sélectionnez 
--les détails suivants : titre du film, description et nom de la langue

SELECT title, description, name FROM film 
INNER JOIN language on 
language.language_id=film.language_id;
--2-1)Obtenez tous les films, même s’ils n’ont pas de langue.
SELECT title, description, name FROM film LEFT OUTER JOIN language on
language.language_id=film.language_id;
--2-2)Obtenez toutes les langues, même s’il n’y a pas de films dans ces langues.

SELECT title, description, name FROM film RIGHT OUTER JOIN language on
language.language_id=film.language_id limit;

CREATE TABLE new_film
(
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(50) 
);
INSERT INTO new_film(name)
VALUES
	('Jack Bauer'),
	('Prison Break'),
	('HomeLand'),
	('Esprit crimminel'),
	('Naruto Uzumaki');

CREATE TABLE customer_review
(
		review_id SERIAL PRIMARY KEY NOT NULL,
		film_id INTEGER NOT NULL,
		language_id INTEGER NOT NULL,
		title VARCHAR(50) NOT NULL,
		score INTEGER NOT NULL CHECK(score>=1 AND score<=10),
		review_text TEXT NOT NULL,
		last_update DATE NOT NULL,
		FOREIGN KEY(film_id) REFERENCES new_film(id) ON DELETE CASCADE,
		FOREIGN KEY(language_id) REFERENCES language(language_id)
);

INSERT INTO customer_review(film_id,language_id, title, score, review_text, last_update)
VALUES
((SELECT id FROM new_film WHERE name='Jack Bauer'), (SELECT language_id FROM language WHERE name='French'),'Spionnage',5,'C"est une serie qui met les dérives du térrorisme', CURRENT_DATE),
((SELECT id FROM new_film WHERE name='Prison Break'), (SELECT language_id FROM language WHERE name='English'),'Drame',9,'Un film motivant qui met en exergue l"injustice',CURRENT_DATE);

--Delete a film that has a review from the new_film table,
--what happens to the customer_review table?
DELETE FROM new_film WHERE name='Jack Bauer';
--On peut supprimé le film sans aucun problème