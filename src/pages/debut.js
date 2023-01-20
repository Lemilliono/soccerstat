import React from "react";
import '../pages/debut.css';
import './LoginPlayer.js';
import ronaldo from '../pages/images/ronaldo.jpg';
import guardiola from '../pages/images/guardiola.jpg';

const debut = () => {
    return (
        <><><><div className="Select">
            <h1>Choisis ton profil</h1>
        </div>
            <div className="cr7">
                <a href="LoginPlayer">
                    <img className="cristiano" src={ronaldo} title="Player Card" alt="Card Player" /></a>
            </div></>
            <div className="pep">
                <a href="LoginCoach">
                    <img className="guardiola" src={guardiola} title="Recruiter Card" alt="Card Recruiter" /></a>
            </div></>
            <div className="text">
                <h1>DEVENEZ UNE SUPERSTAR DU BALLON ROND </h1>
                <h1>OU ALORS... DENICHEZ DE NOUVELLES PEPITES !</h1>
            </div></>
    )
}

export default debut;