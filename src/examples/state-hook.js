// class => state & lifecycle => mount methods
//from react 16.8
// function comp + hook = stateful func comp


import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 Class Components
//             </div>
//         )
//     }
// }

// State hook learning
const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);
    useEffect(() => {
        console.log("just componentdidmount");
        const count_data = localStorage.getItem("count");
        if (count_data) {
            setCount(Number(count_data));
        }
    }, []);

    useEffect(() => {
        console.log("just componentdidupdate for count", count)
        if (count) {
            localStorage.setItem("count", count);
        }
    }, [count]);
    useEffect(() => {
        console.log("just componentdidupdate for text", text)
    }, [text]);


    useEffect(() => {
        console.log("both componentdidmount and componentdidupdate ")
    });
    return (
        <div>
            <p className="fs-1">There is {count} issues...</p>
            <p>girilen text: {text}</p>
            <button className="btn btn-sm btn-info me-3" onClick={() => setCount(count + 1)}>+1</button>
            <button className="btn btn-sm btn-info me-3" onClick={() => setCount(count - 1)}>-1</button>
            <button className="btn btn-sm btn-info me-3" onClick={() => setCount(props.count)}>reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

App.defaultProps = {
    count: 18,
    text: "hello everybody"
}

// function App (props) {
//     return (
//         <div>
//             Create Component with functions
//         </div>
//     )
// }

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App count={10} />);
