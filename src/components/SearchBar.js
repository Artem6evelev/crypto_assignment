import React, { useState } from 'react';

import { initialState } from "../reduxStore";

function Search() {
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(initialState);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = initialState.filter((market) => {
          return market.nameC.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(initialState);
        // If the text field is empty, show all users
      }
  
      setName(keyword);
    };
  
    return (
      <div className="container">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Search all markets"
        />
  
        <div className="user-list">
          {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((user) => (
              <li key={user.id} className="user">
                <span className="user-id">{user.id}</span>
                <span className="user-name">{user.name}</span>
                <span className="user-age">{user.age} year old</span>
              </li>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
      </div>
    );
  }
  
  export default Search;

