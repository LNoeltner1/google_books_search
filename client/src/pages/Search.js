import React, { useState } from 'react';
import API from "../api/API";
import Results from "../components/Results";

const Search = () => {
    const [titleState, setTitleState] = useState("");
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        e.preventDefault();
        let { value } = e.target;
        setTitleState(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        API.getBook(titleState).then((res) => {
            console.log(res.data.items);
            setResults(res.data.items);
        })
    };

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="text-center">Search Books</h1>
                <form>
                    <div className="form-group">
                        <label for="title">Input Title</label>
                        <input type="text" className="form-control" name="title" value={titleState} onChange={handleInputChange} />
                    </div>
                    <button type="submit" className="btn badge-pill btn-outline-dark mt-3" onClick={handleSubmit}>
                        Search Book
                    </button>
                </form> 
            </div>
            <div className="container">
                <h3>Results:</h3>
                <div className="row">
                    <div className="col-md-9">
                        {results.map((res) => (
                            <Results
                                key={res.selfLink}
                                title={res.volumeInfo.title}
                                authors={res.volumeInfo.authors}
                                description={res.volumeInfo.description}
                                link={res.volumeInfo.infoLink}
                                image={res.volumeInfo.imageLinks.thumbnail}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;