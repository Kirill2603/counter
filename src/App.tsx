import React, {useState} from 'react';
import './App.css';
import Counter from "./componets/counter";
import Setter from "./componets/setter";

function App() {


    return (
        <div className="App">
            <Setter />
            <Counter />
        </div>
    );
}

export default App;
