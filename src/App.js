
import './App.css';
import EligeTusTechPRO from './components/EligeTusTechPRO';
import Footer from './components/Footer';

import Header from './components/Header';
import RecibeActualizaciones from './components/RecibeActualizaciones';
import SesionIcons from './components/SesionIcons';
import SobreLosTechPRO from './components/SobreLosTechPRO';

function App() {
  return (
    <div className="App">
      <div className='contenedor'>
        <Header />
        <SesionIcons />
        <SobreLosTechPRO />
        <EligeTusTechPRO />
        <RecibeActualizaciones />
        <Footer />
      </div>
      
    
    </div>
  );
}

export default App;


