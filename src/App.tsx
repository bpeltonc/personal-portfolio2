import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import About from './routes/about';
import Portfolio from './routes/portfolio';
import Contact from './routes/contact';

import "./App.css"
import Card from './components/Card/Card';


const App = () => {
  return (
    <div className='wrapper'>
      <div className="main-container">
        <Header title='Brandon Pelton-Cox' subtitle='Full-Stack Software Developer' color='white'/>
        <NavBar dark={true} />
        <div className='carousel'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className='about-section' id='about'>
        <About />
      </div>
      <div className='portfolio-section' id='portfolio'>
        <Portfolio />
      </div>
      <div className='contact-section' id='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
