import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";

import "./home.css"
import React from "react";

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <div className="header-container">
                <Header title='Brandon Pelton-Cox' subtitle='Full-Stack Software Developer' color='white'/>
                <NavBar dark={true} />
            </div>
            <div className='carousel'>
                <Card />
                <Card />
                <Card />
            </div>
        </React.Fragment>
    );
}

export default Home;