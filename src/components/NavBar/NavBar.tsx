import NavElement from "./NavElement/NavElement";
import { Link, animateScroll as scroll } from "react-scroll";

import "./NavBar.css";

type Props = {
    dark: boolean;
}

const NavBar: React.FC<Props> = ({dark}) => {
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
            ><NavElement title="Home" dark={dark}/></Link>
            <Link to="about"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            delay={250}><NavElement title="About" dark={dark}/></Link>
            <Link to="portfolio"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            delay={250}><NavElement title="Portfolio" dark={dark}/></Link>
            <Link to="contact"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            delay={250}><NavElement title="Contact" dark={dark}/></Link>
        </nav>
    )
}

export default NavBar;