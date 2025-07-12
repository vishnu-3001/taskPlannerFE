import './App.css';
import Header from './Components/Header';
import CardletStack from './Components/CardletStack';

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="cardletStackContainer">
        <CardletStack />
        <CardletStack />
        <CardletStack />
      </div>
    </div>
  );
}

export default App;
