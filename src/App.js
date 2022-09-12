import './App.css'
// import DataFetching from './components/DataFetching';
import Container from './components/Container';
import RandomAccordion from './components/RandomAccordion';
import CardMarket from './components/CardMarket';
import GreenEdhRec from './components/GreenEdhRec';

function App() {
  return (
    <div className="App">
      <Container />
      <RandomAccordion />
      <CardMarket />
      <GreenEdhRec />
    </div>
  );
}

export default App;
