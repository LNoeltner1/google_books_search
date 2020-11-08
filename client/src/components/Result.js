import React, {useState} from "react";
import axios from "axios";

const Result = (props) => {
    const [savedBook, setSavedBook] = useState([]);
    const [state, setState] = useState({
        title: props.title,
        authors: props.authors,
        description: props.description,
        image: props.image,
        link: props.link,
    });

    const handleSave = (e) => {
        axios.post("/api/books", state).then((res) => {
            console.log(res);
        });
    };
    const handleView = (e) => {
        let path = state.link;
        window.open(path);
    };

    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col-md 3">
                        <img alt={props.title} className="img-fluid" src={props.image} />
                    </div>
                    <div className="col-md 9">
                        <div className="card-body">
                            <h4 className="card-title">{props.title} by: {props.authors}</h4>
                            <p>{props.description}</p>
                        </div>
                        <button onClick={handleSave} className="btn badge-pill btn-outline-warning mt-3 ml-3">Save</button>
                        <button onclick={handleView} className="btn badge-pill btn-outline-warning mt-3 ml-3">View My Books</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Result;