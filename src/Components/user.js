import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/user.css'; // Custom CSS file

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${userId}`);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-4 custom-profile">
      <h2>{user.first_name} {user.last_name}'s Profile</h2>
      <p>Email: {user.email}</p>
      <p>Avatar: <img src={user.avatar} alt={`${user.first_name} ${user.last_name}'s avatar`} /></p>
    </div>
  );
};

export default User;
