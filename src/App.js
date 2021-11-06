import './App.css'
import Modal from './components/Modal'

function App() {
  return (
    <div>
      <h1 className="App">
        MTG Card Library
      </h1>
      <h3>
        <Modal />
        {/* CARDS HERE
        TODO: connect to scryfall api
        TODO: add map function */}
      </h3>
      <h4>
        CARD INFO HERE
      </h4>
      <h5>
        SET INFO HERE
        Set symbol?
        Card Price?
        Purchase links?
        Popular decks?
      </h5>
    </div>
  );
}

export default App;
