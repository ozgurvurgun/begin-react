import React from 'react';
import ReactDOM from 'react-dom';


//<button style="color:white;padding: 10px;background-color:red;border:2px solid yellow;" type="button">HTML BUTTON</button>

function App() {
    const buttonValue = "Benim Button";
    const str1 = "Click ";
    const str2 = "Me";

    return (
        <div>
            <button tabIndex={3} className='jsxCLASS' type="button" style={{ padding: '10px', color: 'white', backgroundColor: 'blue', border: '2px solid yellow' }}>{str1.concat(str2)}</button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);