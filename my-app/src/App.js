import logo from './logo.svg';
import './App.css';
import { Counter, Counter2 } from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter name="A Tien" test="Girl"></Counter>
        <Counter2 name='namnam'></Counter2>
      </header>
    </div>
  );
}

export default App;
