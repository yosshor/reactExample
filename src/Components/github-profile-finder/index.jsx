import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("yosshor");
  const [userData, setUserData] = useState(null);
const [loading,setLoading] =useState(false);
  const handleUserName = (name) => {
    setUserName(name);
  };
  function handleGithubUserProfile() {
    console.log(userName);
    fetchGithubData();
  }

  async function fetchGithubData() {
    try {
        setLoading(true);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      if (data) {
        setUserData(data);
        console.log(userData);
        setLoading(false);

      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <div className="user-github">
      <div className="user-wrapper">
        <input
          name="search-by-username"
          onChange={(event) => handleUserName(event.target.value)}
          type="text"
          placeholder="insert github user"
          value={userName}
        />
        <button
          className="user-button"
          onClick={() => handleGithubUserProfile()}
        >
          Search
        </button>
      </div>
      <h2>{loading ? "Loading Data, Please Wait" : null}</h2>
      {userData ? <User user={userData} /> : "Not Found"}
    </div>
  );
}
