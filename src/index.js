
import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css'

import {books} from './data'
import Book from './Book';


// main component
function BookList(){
    return <>
    <h1>Amazone best sellers</h1>
    {books.map((item)=>{
        
        return <section key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.author} />
            <p>{item.author}</p>
        </section>
    })}
    
    </>
}

const root=ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList/>);
