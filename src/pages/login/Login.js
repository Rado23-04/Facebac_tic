import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const url = 'http://127.0.0.1:8080';

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignIn, setIsSignIn] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setErrorMessage('');

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.put(url + '/users', userData);
      setIsSignIn(true);
      console.log('Réponse du serveur:', response.data);


    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      setErrorMessage('Erreur lors de la connexion. Veuillez réessayer.');
    }
  };
  if (isSignIn) {
    return <Navigate to="/Home" replace={true} />; // Utilisez le composant Navigate
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebak</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on facebak.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" id="email" className="loginInput" />
            <input placeholder="Password" id="password" type="password" className="loginInput" />
            <button className="loginButton" onClick={handleSubmit}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
