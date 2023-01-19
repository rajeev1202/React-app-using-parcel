import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import {useState} from 'react';


const heading = React.createElement(
    "h1",
    {
        id:"title",
    },
    ["heading first time", Footer()]);

let Hello = (props) => {
return <div>{console.log("useState",useState(''))}Hello i'm from {props.msg}</div>
}
const heading1 = <h1>Hey guys i'm from JSX</h1>
console.log("jsx",heading1)

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello msg="JSX"/>);