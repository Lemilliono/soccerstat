import Navbar from '../Component/Navbar';
import '../pages/LoginCoach.css';
import React, { useState } from 'react';

const LoginCoach = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // code pour envoyer les données de connexion à votre serveur ici
      console.log(email, password); 
    }
  
    return ( 
    <><><>
    <Navbar/>
      </><div className="form-container">
      <h1>Connexion recruteur</h1>
          <form onSubmit={handleSubmit}>

            <label>
              Email :
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrez votre email" />
            </label>
            <label>
              Mot de passe :
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrez votre mot de passe" />
            </label>
            <button type="submit">Se connecter</button>
          </form>
          <div className="Register"> 
    <a href="RegisterCoach">Inscription</a>
    </div>
        </div></></>
  );
}
  

export default LoginCoach;