import "./profile.css";
import React, { useState } from 'react';
import axios from 'axios';
const url = "http://127.0.0.1:8080"  ;
export default function Profile() {
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
  
    const handleEditProfile = async () => {
      try {
        const response = await axios.put(url +'/users', {
          username,
          bio
        });
        console.log('Profile updated successfully:', response.data);
      } catch (error) {
        console.error('Profile update error:', error);
      }
    };
  return (
    <div>
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
      <button onClick={handleEditProfile}>Save</button>
    </div>
  );
}
