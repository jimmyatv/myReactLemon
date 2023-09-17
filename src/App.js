import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Accordions from './components/Accordions/Accordions';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import OurMission from './components/OurMission/OurMission';
import Success from './components/Success/Success';
import Testemonials from './components/Testemonials/Testemonials';
import Villas from './components/Villas/Villas';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <OurMission />
      <Success />
      <Villas />
      <Cards />
      {/* <Testemonials /> */}
      <Accordions />
    </div>
  );
}

export default App;
