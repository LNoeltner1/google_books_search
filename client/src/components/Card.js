import React from "react";
import axios from "axios";

const Card = (props) => {
    const handleDelete = (e) => {
        const id=e.target.getAttribute("id");


        axios.delete(`/api/books/${id}`).then((res) => {
            console.log(res);
            props.renderBooks();
        });
    };

    const handleView = () => {
        let path = props.link;
        window.open(path);
    };
    return (
        <div>
            <div className="card mb-3">
                <div className="row">
                    <div className="col-md-2">
                        <img alt={props.title} className="img-fluid" src={props.image} />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">{props.title} by: {props.authors}</h5>
                            <p>{props.description}</p>
                        </div>
                        <button onClick={handleView} className="btn badge-pill btn-outline-dark mt-3">View</button>
                        <button id={props.id} onClick={handleDelete} className="btn badge-pill btn-outline-dark mt-3">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;