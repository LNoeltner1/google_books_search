import axios from "axios";

const URL = `http://googleapis.com/books/v1/volumes?q=`;

export default {
    getBook: function (userSearch) {
        return axios.get(URL + userSearch);
    },
    getAll: function () {
        return axios.get("/api/books");
    }
};