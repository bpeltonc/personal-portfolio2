import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";

import "./home.css"

const Home: React.FC = () => {
    return (
        <div className="main-container">
            <Header title='Brandon Pelton-Cox' subtitle='Full-Stack Software Developer' color='white'/>
            <NavBar dark={true} />
            <div className='carousel'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Home;