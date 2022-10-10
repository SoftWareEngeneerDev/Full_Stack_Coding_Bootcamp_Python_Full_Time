-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE bootcamp
    IS 'database for processing ExerciceXP+';
	
--Creating table student
CREATE TABLE students(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	birth_day DATE NOT NULL
);

--INSERTION 

INSERT INTO students(first_name, last_name, birth_day)
VALUES 
('Marc', 'Benichou', '02/11/1998'),
('Yoan','Cohen','03/12/2010'),
('Lea','Benichou','27/07/1987'),
('Amelia','Dux','07/04/1996'),
('David','Grez','14/06/2003'),
('Omer','Simpson','03/10/1980');
--Fetch all of the data from the table
SELECT *FROM students;
--For the following questions, only fetch the first_names and last_names of the students.
SELECT first_name, last_name FROM students;
--Fetch the students whose last_names are Benichou OR first_names are Marc
SELECT *FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';
--Fetch the students whose first_names contain the letter a
SELECT *FROM students WHERE first_name LIKE '%a%';
--Fetch the students whose first_names start with the letter a
SELECT *FROM students WHERE first_name LIKE 'a%';
--Fetch the students whose first_names end with the letter a.
SELECT *FROM students WHERE first_name LIKE '%a';
--Fetch the students whose second to last letter of their first_names are a
SELECT *FROM students WHERE first_name LIKE '%a-%';
--Fetch the students whose id’s are equal to 1 AND 3
SELECT first_name, last_name FROM students WHERE id=1 AND id=3;
--Fetch the students whose birth_dates are equal to or come after 1/01/2000
SELECT *FROM students WHERE birth_day >='1/01/2000';
