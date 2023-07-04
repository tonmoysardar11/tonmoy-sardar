import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ParticleBG from './components/ParticleBG';
import Projects from './components/Projects';
import Skills from './components/Skills';



function App() {

  return (

    <div className='scroll-smooth bg-black'>
      <ParticleBG/>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
