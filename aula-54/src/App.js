import './App.css';
import HelloworldDIO from './components/HelloworldDIO';
import HelloWorldDev from './components/HelloWorldDev';
import HelloworldCalculator from './components/HelloWorldCalculator';

function App() {
  return (
    <div className="App">
      <HelloworldDIO />
      <HelloWorldDev name=" react"/>
      <HelloworldCalculator n1= {5} n2= {7}/>
    </div>
  );
}

export default App;
