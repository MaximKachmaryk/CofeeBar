import './Header.css';
/* import OurCofee from '../OurCofee/OurCofee'; */

import logo from '../images/Logo.svg';




function Header() {
    return (
        <div>
            <div className='main container'>
                
                <div>
                    <div className='header-descr'>
                        <h1>Everything You Love About Coffee</h1>
                        <h2>We makes every day full of energy and taste</h2>
                        <h3>Want to try our beans?</h3>
                        <button className='btn-more'>More</button>
                    </div>


                </div>

            </div >

        </div >
    );
}
export default Header;