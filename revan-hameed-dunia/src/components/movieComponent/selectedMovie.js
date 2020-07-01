import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function MoviePage({ match }) {
  console.log(match);

  const movie_id = match.params.id;
  const [item, setItem] = useState("");
  console.log(match);
  const fetchData = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItem(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="));

  return (
    <div>
      <h1>{item.original_title}</h1>

      <Link to="/">
        <button>back</button>
      </Link>
      
    </div>
  );
}
