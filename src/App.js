import './App.css'
// import DataFetching from './components/DataFetching';
import Container from './components/Container';
import RandomAccordion from './components/RandomAccordion';
import CardMarket from './components/CardMarket';
import GreenEdhRec from './components/GreenEdhRec';
import RedEdhRec from './components/RedEdhRec';
import WhiteEdhRec from './components/WhiteEdhRec';
import BlackEdhRec from './components/BlackEdhRec';
import BlueEdhRec from './components/BlueEdhRec';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container />
      <RandomAccordion />
      <CardMarket />
      <WhiteEdhRec />
      <BlueEdhRec />
      <BlackEdhRec />
      <RedEdhRec />
      <GreenEdhRec />      
    </div>
  );
}

export default App;
