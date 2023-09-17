import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import OurMission from './components/OurMission/OurMission';
import Success from './components/Success/Success';
import Villas from './components/Villas/Villas';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <OurMission />
      <Success />
      <Villas />
    </div>
  );
}

export default App;
