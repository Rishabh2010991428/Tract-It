import './App.css';
import Busroutes from './Components/Busroutes';
import Feestatus from './Components/Feestatus';
import Footer from './Components/Footer';
import Galary from './Components/Galary';
import Inquiry from './Components/Inquiry';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Galary/>
      <Feestatus/>
      <Busroutes/>
      <Inquiry/>
      <Footer/>
    </div>
  );
}

export default App;
