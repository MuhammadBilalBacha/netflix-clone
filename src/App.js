import { Fragment } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app">
        <Banner />
        {/* My Netflex Clone */}
        <Row
          style={{ width: "15rem", height: "15rem" }}
          title="POPULAR"
          isLargerRow={true}
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
        <Row title="ACTION MOVEIS" fetchUrl={requests.fetchActionMoveis} />
        <Row title="COMEDY MOVEIS" fetchUrl={requests.fetchCommedyMoveis} />
        <Row title="HORROR MOVEIS" fetchUrl={requests.fetchHorrorMoveis} />
        <Row title="ROMANCE MOVEIS" fetchUrl={requests.fetchRomanceMoveis} />
        <Row
          title="DOCUMENTARIES"
          fetchUrl={requests.fetchDocumentariesMoveis}
        />
      </div>
    </Fragment>
  );
}

export default App;
