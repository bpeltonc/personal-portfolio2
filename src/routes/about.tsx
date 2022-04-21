import { Link, animateScroll as scroll } from "react-scroll"

const About: React.FC = () => {
    return (
        <div>   
            <h2>About</h2>
            <Link
                to="home"
                activeClass="active"
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
                delay={250}
                onClick={scroll.scrollToTop}><button>^</button></Link>
        </div>
    )
}

export default About