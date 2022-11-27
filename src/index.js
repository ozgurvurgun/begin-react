import React from 'react';
import ReactDOM from 'react-dom';

const names = ["ozgur", "ece", "elis"];

function App() {
    return(
    <div>
        {names.map(name => (<h1>{name}</h1>))}
    </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);