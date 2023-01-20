import '../pages/Tofm.css';
import carra1 from '../pages/images/carra1.jpg';
import rinaz1 from '../pages/images/rinaz1.jpg';
import marais1 from '../pages/images/marais1.jpg';
import florence1 from '../pages/images/florence1.jpg';
import linda1 from '../pages/images/linda1.jpg';
import sabri1 from '../pages/images/sabri1.jpg';
import yasmine1 from '../pages/images/yasmine1.jpg';
import megan1 from '../pages/images/megan1.jpg';
import lisa1 from '../pages/images/lisa1.jpg';
import robin1 from '../pages/images/robin1.jpg';
import maxime1 from '../pages/images/maxime1.jpg';
import Navbar from '../Component/Navbar';

const Tofm = () => {
return (
    <><Navbar />
    <><><><><><><><><><><><div className="tofm">
        <h1>La meilleure équipe du mois</h1>
    </div>
        <div className="carra">
            <img className="carra1" src={carra1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Attaquant numéro 9 : Cameron CARRA. 2 buts & 1 passe décisive.</div>
</div></div>
        </div></>
        <div className="rinaz">
            <img className="rinaz1" src={rinaz1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Attaquant numéro 7 : Samir RINAZ. 3 buts & 15 dribbles réussis.</div>
</div></div>
        </div></>
        <div className="marais">
            <img className="marais1" src={marais1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Attaquant numéro 11 : Jérémie MARAIS. 1 but & 1 passe décisive. </div>
</div></div>
        </div></>
        <div className="florence">
            <img className="florence1" src={florence1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Milieu de terrain numéro 8 : Florence HU. 5 buts & 3 passes décisives, 62/69 passes réussis.</div>
</div></div>
        </div></>
        <div className="linda">
            <img className="linda1" src={linda1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Milieu de terrain numéro 6 : Linda THAP. 38kms parcourus(record) & 1 but.</div>
</div></div>
        </div></>
        <div className="sabri">
            <img className="sabri1" src={sabri1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Milieu de terrain numéro 10 : Sabri BELGUERMA. 4 buts & 4 passes décisives.</div>
</div></div>
        </div></>
        <div className="yasmine">
            <img className="yasmine1" src={yasmine1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Défenseur numéro 2 : Yasmine BOUSSOURA. 3 passes décisives.</div>
</div></div>
        </div></>
        <div className="megan">
            <img className="megan1" src={megan1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Défenseur numéro 3 : Megane PANKIEWICZ. 14/20 tacles réussis.</div>
</div></div>
        </div></>
        <div className="lisa">
            <img className="lisa1" src={lisa1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Défenseur numéro 5 : Lisa TORREGROSSA. 8/8 dribbles contrés.</div>
</div></div>
        </div></>
        <div className="robin">
            <img className="robin1" src={robin1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Défenseur numéro 4 : Robin LEQUEREC. 21 duels aériens remportés.</div>
</div></div>
        </div></>
        <div className="maxime">
            <img className="maxime1" src={maxime1} alt="Equipe du mois" />
            <div class="hwrap"><div class="hmove">
            <div class="hitem">Gardien numéro 1 : Maxime TAREL. 3 cleans sheet.</div>
</div></div>
        </div></></>
)
}
  
export default Tofm;
