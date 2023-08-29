import "./profile.css";
import React, { useState } from 'react';
import "../../components/topbar/Topbar"
import axios from 'axios';
import Topbar from "../../components/topbar/Topbar";

const url = "http://127.0.0.1:8080";

export default function Profile() {
 
  const userData = {
    id: "cdb36530-5a51-4619-b90a-5702d3c422ce",
    email: "hei.maharavo@gmail.com",
    username: "Maharavo",
    joinedAt: "2023-08-28T13:47:20.213Z",
    bio: "fifalia",
    photo: null,
    password: "12345678@!"
  };

  const [username, setUsername] = useState(userData.username);
  const [bio, setBio] = useState(userData.bio);
  const [password, setPassword] = useState(userData.password);

  const handleEditProfile = async () => {
    try {
      const response = await axios.put(`${url}/users`, {
        ...userData, 
        username,
        bio,
        password
      });
      alert('Profile updated successfully:', response.data )
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Profile update error:', error);
    }
  };

  return (
    <div>
      <Topbar>  </Topbar>
      <div className="profile-form">
        <h2>Edit Profile</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <input
          type="password"
          placeholder="Current Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleEditProfile}>Save</button>
      </div>
    </div>
  );
}
