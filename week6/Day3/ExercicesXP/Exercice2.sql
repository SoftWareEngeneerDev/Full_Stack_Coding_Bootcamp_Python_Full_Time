--Utilisez UPDATE pour changer la langue de certains films. 
--Assurez-vous d’utiliser des langues valides.

UPDATE 

UPDATE film SET language_id=(SELECT language_id FROM language WHERE name='French') 
WHERE film_id BETWEEN 1 AND 100;
--Quelles clés étrangères (références) sont définies pour la table customer ? 
--Comment cela affecte-t-il la façon dont nous INSÉRONS
--dans la table des clients?
    --les clé étrangère sont store_id et address_id
    --Pour l'insertion dans la table customer il faut impérativement des données existantes
    --c'est à dire store_id et address_id.

 --Drop table customer_review
DROP TABLE customer_review;
--Is this an easy step

--Découvrez combien de locations sont encore en suspens 
--(c.-à-d. n’ont pas encore été retournées au magasin).
SELECT count(rental_id) FROM rental WHERE return_date IS NULL;

--Trouvez les 30 films les plus chers qui sont exceptionnels 
--(c’est-à-dire qui n’ont pas encore été retournés au magasin)

SELECT f.title ,f.rental_rate FROM 
rental r INNER JOIN inventory i ON i.inventory_id=r.inventory_id 
INNER JOIN film f ON f.film_id=i.film_id
WHERE r.return_date IS NULL AND f.rental_rate 
IN(SELECT MAX(rental_rate) FROM film)  LIMIT 30;

--Votre ami est au magasin et décide de louer un film. Il sait qu’il veut voir 4 films, 
--mais il ne se souvient 
--pas de leurs noms. Pouvez-vous l’aider à trouver quels films il veut louer?

   --Le 1er film : Le film parle d’une lutteuse de sumo, 
   --et l’une des actrices est Penelope Monroe.

   SELECT title FROM film INNER JOIN film_actor ON film.film_id=film_actor.film_id
   WHERE description ILIKE '%a sumo wrestler%' AND film_actor.actor_id=
   (SELECT actor_id FROM actor WHERE first_name='Penelope' AND last_name='Monroe');
   

   --Le 2ème film : Un court documentaire (moins d'1 heure), classé « R ».

   SELECT f.title FROM film f INNER JOIN film_category fc ON f.film_id=fc.film_id  WHERE (f.length/60)<1 AND f.rating='R' 
   AND fc.category_id=(SELECT category_id FROM category WHERE name ILIKE '%documentary%');


  SELECT f.title FROM film f INNER JOIN inventory i ON f.film_id=i.film_id INNER JOIN rental r 
  ON r.inventory_id=i.inventory_id WHERE f.rental_rate>4 AND r.return_date 
  BETWEEN '2005-07-28' AND '2005-08-01' AND r.customer_id=
  (SELECT customer_id FROM customer WHERE first_name='Matthew' AND last_name='Mahan');


  SELECT f.title FROM film f INNER JOIN inventory i ON f.film_id=i.film_id INNER JOIN rental r ON r.inventory_id=i.inventory_id WHERE ((f.title ILIKE'%boat%') OR (f.description ILIKE'%boat%')) 
 AND r.return_date IS NOT NULL AND f.replacement_cost> (SELECT AVG(replacement_cost) FROM film) AND r.customer_id=(SELECT customer_id FROM customer WHERE first_name='Matthew' AND last_name='Mahan');


