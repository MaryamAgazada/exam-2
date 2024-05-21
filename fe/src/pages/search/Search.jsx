import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Search() {
  const [data, setData] = useState([]);
  const [inp, setInp] = useState("");
  async function getAllData(params) {
    const response = await fetch("http://localhost:3000");
    const movies = await response.json();
    console.log(movies);
    setData(movies);
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <input
        type="text"
        placeholder="search"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      {data
        .filter((x) => x.name.toLowerCase().includes(inp.toLowerCase()))
        .map((x) => {
          return (
            <>
              <div className="cards" key={x._id}>
                <div className="card">
                  <h2>{x.title}</h2>
                  <p>{x.desc}</p>
                  <div className="mini-card">
                    <img src={x.img} alt="" />
                    <span>{x.name}</span>
                    <p>{x.price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Search;
