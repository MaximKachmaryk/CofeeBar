/* import './Header.css'; */
/* import OurCofee from '../OurCofee/OurCofee'; */

import logo from '../images/Logo.svg';




function Nav() {
    return (
        <div>
           <nav className='menu'> 
                  <ul>

                    <li><a href="/header"><img src={logo} alt="logo" /></a></li>

                    <li><a href="/ourcoffe">Our coffee</a></li>
                    <li><a href="/Foryourpleasure">For your pleasure</a></li>
                </ul>
                </nav>

        </div >
    );
}
export default Nav;