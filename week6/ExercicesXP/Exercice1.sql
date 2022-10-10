-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

--add table items
		CREATE TABLE items(
			id SERIAL PRIMARY KEY,
			libelle  VARCHAR (50) NOT NULL,
			price INTEGER NOT NULL
		);


--  add table custumers
		CREATE TABLE customers(
			id SERIAL PRIMARY KEY,
			first_name  VARCHAR(50) NOT NULL,
			last_name  VARCHAR(50) NOT NULL
		);

--adding data to the table items and custumers
		INSERT INTO items(libelle, price)
		VALUES
		('Small_Desk',100),
		('Large_desk',300),
		('Fan',80);

		INSERT INTO customers(first_name, last_name)
		VALUES
		('Greg','Jones'),
		('Sandra','Jones'),
		('Scott','Scott'),
		('Trevor','Green'),
		('Melanie','Johnson');

--Use SQL to fetch the following data from the database:
--All the items
		SELECT *FROM items;
--All the items with a price above 80 (80 not included)
		SELECT *FROM items WHERE price >80;
--All the items with a price below 300. (300 included)
        SELECT *FROM items WHERE price <300;
--All customers whose last name is ‘Smith’ (What will be your outcome?).
        SELECT *FROM customers WHERE last_name = 'Smith';
--All customers whose last name is ‘Jones’.
        SELECT *FROM customers WHERE last_name ='Jones';
--All customers whose firstname is not ‘Scott’
        SELECT *FROM customers WHERE first_name != 'Scott';
		
