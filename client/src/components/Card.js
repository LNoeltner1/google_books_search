import React from "react";
import axios from "axios";

const Card = (props) => {
    const handleDelete = (e) => {
        const id=e.target.getAttribute("id");


        axios.delete(`/api/books/`)
    }
}