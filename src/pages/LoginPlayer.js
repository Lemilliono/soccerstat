/*import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';*/
import Navbar from '../Component/Navbar';
import '../pages/LoginPlayer.css';
import React, { useState } from 'react';


/*const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert("vous devez être connecté pour accéder à cette page");
            setTimeout(() => {
                window.location.href = "/login";
            }, 10000);
        }
    }, [location]);*/

   /* return (
        <div> 
            <Navbar/>
        <div class="home-page">
            
  <div class="coach-card">
    <h2>For the Coach (like Guardiola)</h2>
    <form>
      <label>Name : <input type="text" name="coach-name" /></label>
      <label>Email : <input type="email" name="coach-email" /></label>
      <label>Password : <input type="password" name="coach-password" /></label>
      <button type="submit">Sign up</button>
    </form>
  </div>
  <div class="player-card">
    <h2>For the Player (like Cristiano Ronaldo)</h2>
    <form>
      <label>Name : <input type="text" name="player-name" /></label>
      <label>Email : <input type="email" name="player-email" /></label>
      <label>Password : <input type="password" name="player-password" /></label>
      <button type="submit">Sign up</button>
    </form>
  </div>
</div>
</div> 
 );
};*/


const LoginPlayer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email, password);
    }
  
    return ( 
    <><><>
    <Navbar/>
      </><div className="form-container">
      <h1>Connexion joueur</h1>
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
    <a href="RegisterPlayer">Inscription</a>
    </div>
        </div></></>
  );
}
  

export default LoginPlayer;
