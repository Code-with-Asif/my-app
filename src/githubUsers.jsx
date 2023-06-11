import React, { useEffect, useState } from "react";
import axios from "axios";
import "./github.style.css";
const url = "https://api.github.com/users";
const GithubUsers = () => {
  const [user, setUser] = useState([]);
  const fetchUser = () => {
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
        {user.map((myUser) => (
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
