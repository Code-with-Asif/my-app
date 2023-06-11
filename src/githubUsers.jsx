import React, { useEffect, useState } from "react";
import axios from "axios";
import "./github.style.css";
const url = "https://api.github.com/users";
const GithubUsers = () => {
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");
  const fetchUser = async () => {
    axios
      .get(url)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(`hears your error${error}`);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <main>
        <h1>GitHub Users</h1>
        <br />
        <label htmlFor="serach">Search</label>
        <input
          type="search"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <br />
        {user
          .filter((myUser) => {
            //we can use incules or startsWith
            return myUser.login.toLowerCase().includes(query);
          })

          .map((myUser) => (
            <div className="user" key={myUser.id}>
              <div className="userDetails">
                <h4>{myUser.login}</h4>
                <img src={myUser.avatar_url} alt="users" />
              </div>
            </div>
          ))}
      </main>
    </div>
  );
};

export default GithubUsers;
