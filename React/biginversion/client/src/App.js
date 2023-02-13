import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard personName="jay" lastName = "Doe" personAge= {50} personHaircolor="black" />
      <PersonCard personName="juleus" lastName = "Re" personAge={51} personHaircolor="brown" />
      <PersonCard personName="louis" lastName = "Mi" personAge={49} personHaircolor="auburn" />
    </div>
  );
}

export default App;
