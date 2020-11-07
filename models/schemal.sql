CREATE DATABASE google_booksDB;
USE google_booksDB;

CREATE TABLE 'books'
(
    'id' int NOT NULL AUTO_INCREMENT,
    'title' varchar,
    'authors' varchar,
    'description' varchar,
    'image' varchar, 
    'link' varchar,
    PRIMARY KEY (id)
);