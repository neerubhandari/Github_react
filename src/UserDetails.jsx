import  { useEffect, useState } from 'react';
import axios from 'axios';
const UserDetials = ({ match }) => {
  const [ setUser] = useState({});


  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${match.params.username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  },);  
};

export default UserDetials;
