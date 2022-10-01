import logoblk from '../images/logoblk.svg';
function Footer() {
    return (<div>

        <div className='footer container'>
            <ul>
                <li><img src={logoblk} alt="logo" /></li>
                <li><a href="#e">Our coffee</a></li>
                <li><a href="#e">For your pleasure</a></li>

            </ul>
        </div>
    </div>


    )
}
export default Footer;