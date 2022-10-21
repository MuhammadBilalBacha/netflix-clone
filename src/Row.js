import movieTrailer from "movie-trailer";
import React, { Fragment, useEffect, useState } from "react";
import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargerRow }) {
  const [moveis, setMoveis] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMoveis(request.data.results);

      // console.log(request);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // Devoleper Google Youtube
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // const hhh = console.log(moveis);

  return (
    <Fragment>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="row">
        <div className="row-posters">
          {moveis.map((movei) => (
            <img
              onClick={() => handleClick(movei)}
              className={`row_poster ${isLargerRow && "posterLarge"}`}
              key={movei.id}
              src={`${base_url}${
                isLargerRow ? movei.poster_path : movei.backdrop_path
              }`}
              alt={movei.name}
            />
          ))}
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Fragment>
  );
}

export default Row;
