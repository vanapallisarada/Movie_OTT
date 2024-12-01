



import React, { useState } from 'react';

  function Searchtv() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const submitHandler = (e) => {
      e.preventDefault();

      // Fetch data based on search query
      fetch(`https://api.themoviedb.org/3/tv/${search}?api_key=373aea4c974fd00b0c757aa8bee6827e`)
      
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
            <h1>Search Tv shows Here categorywise</h1>
            {/* <h4>Search Movies here to watch</h4> */}
            <h6>top_rated,airing_today,popular,on_the_air</h6>
          
            <form onSubmit={submitHandler}>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /><br /><br />
              <input type="submit" value="Search" className="mb-5" />
            </form>
          </center>
        </div>

        <div className="row">
          {data.map(tv =>
            <div className="col-md-3 mb-5">
              <div className="card h-100" style={{ "width": "18rem" }}>
                <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className="card-img-top" alt={tv.title} />
                <div className="card-body">
                  <h4 className="card-title">{tv.title}</h4>
                  <button className="btn btn-primary" onClick={() => download(`https://image.tmdb.org/t/p/w500${tv.poster_path}`)}>Download</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  export default Searchtv;
