import { logo } from "../images/landingPage";

const Header = () => {
    return (
    <>
        <header>
            <nav>
                <img src={logo} alt='Logo' className='logo'/>
                <ul>
                    <li><a href="/portfolio/home">HOME</a></li>
                    <li><a href="/portfolio/projects">PROJECTS</a></li>
                    <li><a href="/portfolio/curriculum">CURRICULUM</a></li>
                    <li><a href="/portfolio/contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header;