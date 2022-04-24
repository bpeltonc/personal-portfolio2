import { Link, animateScroll as scroll } from "react-scroll";

import "./ScrollToTopButton.css";

import upArrow from "../../assets/arrow-up-circle.png";

const ScrollToTopButton: React.FC = () => {
    return (
        <Link
            to="home"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            delay={250}
            onClick={scroll.scrollToTop}>
                <div className="button-container">
                    <img src={upArrow}
                    alt="arrow-up-circle"/>
                    <p>Scroll To Top</p>
                </div>
        </Link>
    );
}

export default ScrollToTopButton;