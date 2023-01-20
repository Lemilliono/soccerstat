import React, { useState } from 'react';
import '../pages/RegisterPlayer.css';
import Navbar from '../Component/Navbar';

const RegisterPlayer = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [club, setClub] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nom, prenom, club, email, password);
  }

  return (
    <><Navbar />
    
    <div className="form-container">
        <h1>Inscription recruteur</h1>
          <form onSubmit={handleSubmit}>
              <label>
                  Nom :
                  <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
              </label>
              <label>
                  Prenom :
                  <input type="texte" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
              </label>
              <label>
                  Club :
                  <input type="club" value={club} onChange={(e) => setClub(e.target.value)} />
              </label>
              <label>
                  Email :
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                  Mot de passe :
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <label>
                  Confirmer le mot de passe :
                  <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
              </label>
              <button type="submit">S'inscrire</button>
          </form>
      </div></>
    );
}
        

export default RegisterPlayer;