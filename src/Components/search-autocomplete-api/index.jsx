import { useEffect, useState } from "react";
import "./styles.css";
import { useSearchParams } from "react-router-dom";
import Options from "./options";


export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);


  function handleClick(event){
    console.log("clicked" , event.target.innerText)
    setSearchWord(event.target.innerText);
    setShowDropDown(false);
    setFilteredUsers([]);
  }


  function handleChange(event){
    const query = event.target.value.toLowerCase().trim();
    setSearchWord(event.target.value);

    if(users && users.length > 0 && query.length > 0){
        const filterData = users.filter((item) => item.toLowerCase().indexOf(query) > - 1)
        setFilteredUsers(filterData);
        setShowDropDown(true);
    }
    else{
        setFilteredUsers([]);
        setShowDropDown(false);
    }
    console.log(query);
  }

  async function fetchUsersData() {
    try {
      setLoading(true);
      const url = "https://dummyjson.com/users";
      const data = await fetch(url).then((res) => res.json());
      console.log(data.users);
      if (data.users.length > 0) {
        console.log("set users data");
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(false);

      }
    } catch (e) {
      setLoading(false);
      setError(true);
      console.error(e);
    }
  }

  useEffect(() => {
    try {
      fetchUsersData();

    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="user-autocomplete-api">
      <input value={searchWord} onChange={handleChange} type="text" name="" placeholder="Insert Your Name.." />
      {showDropDown ? <Options data={filteredUsers} handleClick={handleClick}/> : null}
      <div className="loading">
        {loading ? <p>Loading Data. Please Wait.</p> : null}
      </div>
      <div className="error">
        {error ? <p>Some Error Ouccured. Please try again letter</p> : null}
      </div>
    </div>
  );
}


