import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';


const heading = React.createElement(
    "h1",
    {
        id:"title",
    },
    ["heading first time", Footer()]
)

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);