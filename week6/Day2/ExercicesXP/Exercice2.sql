--Dans la base de données dvdrental,
--écrivez une requête pour sélectionner toutes les colonnes de la table « customer ».
SELECT *FROM customers;

--Écrivez une requête pour 
--afficher les noms (first_name, last_name) à l’aide d’un alias nommé « full_name ».

SELECT (first_name, last_name) as full_name FROM actor;

--Permet d’obtenir toutes les dates auxquelles les comptes ont été créés. Écrivez une requête pour sélectionner 
--tous les create_date de la table « customer » (il ne doit pas y avoir de doublons).

SELECT DISTINCT create_date FROM customer;

--Écrivez une requête pour obtenir tous les détails du client à partir de la table client, 
--elle doit être affichée dans l’ordre décroissant par leur prénom.

SELECT *FROM customer ORDER BY last_name DESC;

--Écrivez une requête pour obtenir l’ID du film, le titre, la description, 
--l’année de sortie et le taux de location dans l’ordre croissant en fonction 
--de leur taux de location.

SELECT film_id, title, description, release_year,rental_rate FROM film ORDER BY rental_rate ASC;

--Écrivez une requête pour obtenir l’adresse et le numéro de téléphone de 
--tous les clients vivant dans le district du Texas, 
--ces détails peuvent être trouvés dans le tableau « adresse ».

SELECT address, phone FROM address WHERE district = 'Texas';

--Écrivez une requête pour récupérer tous les 
--détails du film dont l’ID de film est 15 ou 150.
SELECT *FROM film WHERE film_id = 15 OR film_id = 150;
SELECT *FROM film WHERE film_id IN (15,150);

--Écrivez une requête qui devrait vérifier si votre film préféré existe dans 
--la base de données. Demandez à votre requête d’obtenir l’ID du film, le titre, 
--la description, la durée 
--et le tarif de location, ces détails peuvent être trouvés dans le tableau « film ».

SELECT film_id, title, description, film.length,rental_rate FROM film WHERE title='African Egg';

--Pas de chance de trouver votre film? Peut-être avez-vous fait une erreur en épelant 
--le nom. Écrivez une requête pour obtenir l’ID du film, le titre, la description, 
--la durée et le taux de location 
--de tous les films commençant par les deux premières lettres de votre film préféré.

SELECT film_id, title, description, film.length,rental_rate FROM film WHERE title LIKE 'Af%';

--Écrivez une requête qui trouvera les 10 films les moins chers. 

SELECT film_id, title, description, film.length,rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10;

--Pas satisfait des résultats. Écrivez une requête qui trouvera les 10 films 
--les moins chers suivants.
--Bonus: Essayez de ne pas utiliser LIMIT. 

SELECT  film_id,title,description,film.length,rental_rate FROM film  ORDER BY rental_rate ASC  OFFSET 10 FETCH FIRST 10 ROWS ONLY;

--Écrivez une requête qui joindra les données dans la table 
--client et la table de paiement. Vous souhaitez obtenir le montant et la date 
--de chaque paiement effectué par un client, commandé par son identifiant (de 1 à...).

SELECT amount, payment_date 
FROM payment INNER JOIN customer
ON payment.customer_id=customer.customer_id 
ORDER BY customer.customer_id ASC;

--Vous devez vérifier votre inventaire. Écrivez une requête 
--pour obtenir tous les films qui ne sont pas en inventaire.
------------------------------------------------------------------
--You need to check your inventory. Write a query 
--to get all the movies which are not in inventory.

SELECT film_id, title, description, film.length,rental_rate FROM film 
WHERE film_id NOT IN (SELECT film_id FROM inventory);

--Écrivez une requête pour trouver quelle ville est dans quel pays.
SELECT country , city FROM country INNER JOIN city ON city.country_id= country.country_id;

--Bonus Vous voulez être en mesure de voir comment vos vendeurs se sont 
--comportés? Écrivez une requête pour obtenir l’identifiant du client, les noms 
--(prénom et nom), le montant et la date de 
--paiement commandé par l’identifiant du membre du personnel qui leur a vendu le dvd.

SELECT cu.customer_id,cu.first_name,cu.last_name, pa.amount,pa.payment_date FROM 
customer cu JOIN payment pa ON pa.customer_id=cu.customer_id JOIN 
staff s ON s.staff_id=pa.staff_id ORDER BY pa.staff_id ;