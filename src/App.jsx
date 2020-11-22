import React, { useState } from 'react';
import axios from 'axios';
import Search from './Components/Search.jsx';
import Users from './Components/Users.jsx'
const App = () => {
  const [users, setUsers] = useState([]);
  // Search Users
  const searchUsers = query => {
    axios.get(
        `https://api.github.com/search/users?q=${query}&page=1&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then(res => {
        setUsers(res.data.items);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  return (
    <div>
      <div className='container'>
        <Search searchUsers={searchUsers} />
        <Users users={users} />
      </div>
    </div>
  );
};

export default App;
