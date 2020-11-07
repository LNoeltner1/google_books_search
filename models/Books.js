// -- CREATE DATABASE google_booksDB;
// -- USE google_booksDB;

// -- CREATE TABLE 'books'
// -- (
// --     'id' int NOT NULL AUTO_INCREMENT,
// --     'title' varchar,
// --     'authors' varchar,
// --     'description' varchar,
// --     'image' varchar, 
// --     'link' varchar,
// --     PRIMARY KEY (id)
// -- );

const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema ({
    title: {
        type: String,
        required: "Title is required",
    },
    authors: {
        type: Array,
        required: "Author/s required",
    },
    description: {
        type: String,
        REQUIRED: "Description required",
    },
    image: {
        type: String,
        required: "Image required",
    },
    link: {
        type: String,
        required: "Link is required",
    }
});

const Books=mongoose.model ("Book", BooksSchema);
module.exports = Books;