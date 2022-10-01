
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';

function Main() {
    return (<div>


        <div className='about container'>
            <h1>About us</h1>
            <div><p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
            </p>
                <p>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p></div>
        </div>
        <div className='our-best'>
            <div className='our-cards container'>
                <div className='our-card'>
                    <img src={card1} alt="card" />
                    <p>Solimo Coffee Beans 2 kg</p>
                    <p>15.73$</p>
                </div>
                <div className='our-card'>
                    <img src={card2} alt="card" />
                    <p>Presto Coffee Beans 1 kg </p>
                    <p>10.73$</p>
                </div>
                <div className='our-card'>
                    <img src={card3} alt="card" />
                    <p>AROMISTICO Coffee 1 kg</p>
                    <p>6.99$</p>
                </div>

            </div>
        </div>
       
    </div>


    )
}
export default Main;