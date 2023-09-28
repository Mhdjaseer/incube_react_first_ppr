
import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css'



// main component
function BookList(){
    return <>
    <h1>Amazone best sellers</h1>
    
    </>
}

const root=ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList/>);
