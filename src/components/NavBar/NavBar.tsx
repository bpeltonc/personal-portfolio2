import NavElement from "./NavElement/NavElement";

import "./NavBar.css";

const NavBar: React.FC = () => {
    return (
        <nav className="navBar">
            <NavElement title="Home"/>
            <NavElement title="About"/>
            <NavElement title="Portfolio"/>
            <NavElement title="Contact"/>
        </nav>
    )
}

export default NavBar;