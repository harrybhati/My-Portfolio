import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Certification from './Components/Certification';
import './App.css';

function App() {
  return (
   <>
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Certification />
      <Footer />
    </div>
   
   
   
   </>
  );
}

export default App;
