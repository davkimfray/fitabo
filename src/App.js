import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import "./styles/GlobalStyles.css"
import FitaboServices from './components/FitaboServices';
import Faq from './components/Faq'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  const name = 'Fitabo'
  Aos.init()

  return (
    <div>
      <Landing/>
      <FitaboServices/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
