import logo from './logo.svg';
import './App.css';
import { Counter, Counter2 } from './components/Counter';
import { useState } from 'react';
import styled from 'styled-components';

const BlackStyle = styled(Counter2)`
    h2 {
        color: black;
    }
`;


function App() {
    const [name, setName] = useState('tuan');
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter name={name} test="Girl"></Counter>
                <button onClick={() => setName('nam')}>CLICK CHANGE NAME</button>
                <Counter2 name='namnam'></Counter2>
                <BlackStyle></BlackStyle>
            </header>
        </div>
    );
}

export default App;
