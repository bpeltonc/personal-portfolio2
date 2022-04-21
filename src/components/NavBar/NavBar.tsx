import NavElement from "./NavElement/NavElement";
import { Link, animateScroll as scroll } from "react-scroll";

import "./NavBar.css";

const NavBar: React.FC = () => {
    return (
        <nav className="navBar">
            <Link 
            to="home"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            delay={250}
            onClick={scroll.scrollToTop}
            ><NavElement title="Home"/></Link>
            <Link to="about"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            delay={250}><NavElement title="About"/></Link>
            <Link to="portfolio"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            delay={250}><NavElement title="Portfolio"/></Link>
            <Link to="contact"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            delay={250}><NavElement title="Contact"/></Link>
        </nav>
    )
}

export default NavBar;