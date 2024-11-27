import { logo } from "../images/landingPage";

const Header = () => {
    return (
    <>
        <header>
            <nav>
                <img src={logo} alt='Logo' className='logo'/>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PROJECT</a></li>
                    <li><a href="#">CURRICULUM</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header;