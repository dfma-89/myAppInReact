import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <div>
    <div className="container py-5">
    <nav>
      <ul className="pagination justify-content-center">
        {info.prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePreviousPage}>
              Previous
            </button>
          </li>
        ) : null}
        {info.next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNextPage}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  </div>

    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.image} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">Species: {item.species}</p>
                <p className="card-text">Location: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

<div className="container pb-5">
<nav>
  <ul className="pagination justify-content-center">
    {info.prev ? (
      <li className="page-item">
        <button className="page-link" onClick={handlePreviousPage}>
          Previous
        </button>
      </li>
    ) : null}
    {info.next ? (
      <li className="page-item">
        <button className="page-link" onClick={handleNextPage}>
          Next
        </button>
      </li>
    ) : null}
  </ul>
</nav>
</div>
</div>
);
};

export default Characters;
