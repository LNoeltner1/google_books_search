import axios from "axios";

const url = `https://www.googleapis.com/books/v1/volumes?q=`;
// const key = "AIzaSyDkL7U6ZBbYDUJCjuuLwJStG8fa6TIsvmU";
export default {
    getBook: function (term) {
        return axios.get(url + term);
    },
    getAllBooks: function () {
        return axios.get("/api/books");
    }
};