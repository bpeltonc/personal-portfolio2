import Home from './routes/home/home';
import About from './routes/about';
import Portfolio from './routes/portfolio';
import Contact from './routes/contact';

import "./App.css"

const App = () => {
  return (
    <div className='wrapper'>
      <div className='home-section' id='home'>
        <Home />
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
