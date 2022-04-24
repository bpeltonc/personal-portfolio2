import React from "react"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton"

import "./about.css"

const About: React.FC = () => {
    return (
        <React.Fragment>
            <div className="about-heading-container">
                <Header title="About" color="black" />
                <NavBar dark={false}/>
            </div>
            <div className="about-content-container">
                <ScrollToTopButton />
            </div>
        </React.Fragment>
    )
}

export default About