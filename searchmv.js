




// SearchMV.js
import React, { useState } from 'react';

function Searchmv() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    // Fetch data based on search query
    fetch(`https://api.themoviedb.org/3/movie/${search}?api_key=373aea4c974fd00b0c757aa8bee6827e`)
    
      .then(response => response.json())
      .then(value => setData(value.results))
      .catch(error => console.error('Error fetching data:', error));
  };

  const download = (url) => {
    fetch(url).then(response => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png");
        document.body.appendChild(link);
        link.click();
      });
    })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row">
        <center>
          <h1>Search Movies Here categorywise</h1>
          {/* <h4>Search Movies here to watch</h4> */}
          <h6> now_playing , popular,top_rated,upcoming</h6>
        
          <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /><br /><br />
            <input type="submit" value="Search" className="mb-5" />
          </form>
        </center>
      </div>

      <div className="row">
        {data.map(movie =>
          <div className="col-md-3 mb-5">
            <div className="card h-100" style={{ "width": "18rem" }}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h4 className="card-title">{movie.title}</h4>
                <button className="btn btn-primary" onClick={() => download(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)}>Download</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Searchmv;
