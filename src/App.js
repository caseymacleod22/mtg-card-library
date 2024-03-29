import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
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
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Home />     
    </div>
  );
}

export default App;
