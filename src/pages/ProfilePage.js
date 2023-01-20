import React from "react";
import florence1 from '../pages/images/florence1.jpg';
import '../pages/ProfilePage.css';

const ProfilePage = () => {
  return (
    <><><><><div className="Selecto">
      <h1>Ton profil</h1>
    </div>
      <div className="cr7">
          <img className="cris" src={florence1} alt="You" />
      </div></>
      <div className="apello">
        <h1> Florence HU <br></br>
            Milieu offensif</h1> 
      </div>
    </></><div className="texto">
        <h1>Tu as actuellement 5 buts & 3 passes décisives à ton actif en 13 matchs. </h1>
        <h1>Etant une immense passionnée de foot, j'aime aider l'équipe de par mes qualités techniques, mais aussi dans le vestiaire pour remotiver les troupes !</h1>
      </div></>
  )
 
}

export default ProfilePage;
