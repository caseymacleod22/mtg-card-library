import './App.css'
import DataFetching from './components/DataFetching';
import Container from './components/Container';
import RandomAccordion from './components/RandomAccordion';
import CardMarket from './components/CardMarket';
import EdhRec from './components/EdhRec';

function App() {
  return (
    <div className="App">
      <Container />
      <RandomAccordion />
      <CardMarket />
      <EdhRec />
    </div>
  );
}

export default App;
