import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminPanel from "./SidePanel";
import { FaSearch } from "react-icons/fa";

import Spinner from "../../components/Spinner/Spinner";
import "./Dashboard.css";
import noResult from "./no result.svg";
import search from "./search.svg";

function App() {
  return (
    <main>
      <div className="dashboard">
        <AdminPanel />
        <Finder />
      </div>
    </main>
  );
}

const Finder = () => {
  const [id_phone, setId_phone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState({});
  let url;
  if (id_phone.includes("@")) {
    url = ` https://manthan-futuristic.herokuapp.com/data/user/find?email=${id_phone}`;
  } else {
    url = ` https://manthan-futuristic.herokuapp.com/data/user/find?mobile=${id_phone}`;
  }

  const dataFetching = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSearchResult(data);
    setIsLoading(false);
  };

  const searchAccount = (e) => {
    e.preventDefault();

    if (id_phone.length > 0) {
      setIsLoading(true);
      dataFetching();
    }
  };
  return (
    <div className="finder">
      <h1>
        <FaSearch className="sc" /> Search Linked Accounts
      </h1>
      <div className="search">
        <form
          className="search-bar"
          onSubmit={searchAccount}
          autoComplete="off"
        >
          <input
            type="search"
            id="search-box"
            name="search-box"
            value={id_phone}
            placeholder="Enter email-id or phone no."
            onChange={(e) => setId_phone(e.target.value)}
          />
        </form>
      </div>
      <div className="title">
        <h1>Related Results</h1>
        <div className="underline"></div>
      </div>
      <article className="results">
        {!isLoading && Object.keys(searchResult).length === 0 && (
          <div className="no-result">
            <img src={search} alt="waiting to search" />
            <h4>Waiting to search</h4>
          </div>
        )}
        {isLoading && <Spinner />}
        {console.log(searchResult)}
        {!isLoading &&
          Object.keys(searchResult).length > 0 &&
          searchResult.status && (
            <div className="result">
              <div className="column">
                <h3>First Name</h3>
                <p>{searchResult.data.firstName}</p>
              </div>
              <div className="column">
                <h3>Last Name</h3>
                <p>{searchResult.data.lastName}</p>
              </div>
              <div className="column">
                <h3>Account Type</h3>
                <p>{searchResult.data.dbType}</p>
              </div>
              <div className="column">
                <h3>Action required</h3>
                <Link to={`/dashboard/profile/${searchResult.data._id}`}>
                  <p style={{ color: "blue" }}>View Profile</p>
                </Link>
              </div>
            </div>
          )}
        {!isLoading &&
          Object.keys(searchResult).length > 0 &&
          !searchResult.status && (
            <div className="no-result">
              <img src={noResult} alt="not found" />
              <h4>Result Not Found</h4>
            </div>
          )}
      </article>
    </div>
  );
};

export default App;
