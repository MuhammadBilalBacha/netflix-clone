import React, { Fragment, useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
// import netflix from "./assets/netflix.jpg";
import requests from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function RequestData() {
      const response = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }

    RequestData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Fragment>
      <header
        className="bannerTop"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">{movie?.original_name}</h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <div className="banner_description">
            {truncate(movie.overview, 150)}
          </div>
          {/* <div className="banner__bottom"></div> */}
        </div>
      </header>
      {/* <header className="banner">
        <img src={netflix} alt="" />
        <div className="bannerReading">
          <h2>The Witcher</h2>
          <div>
            <button>Play</button>
            <button>My List</button>
          </div>
          <p>
            World Most Popular Movies Site keep Visiting Its For You Watch
            Movies Now
          </p>
        </div>
      </header> */}
    </Fragment>
  );
}

export default Banner;
