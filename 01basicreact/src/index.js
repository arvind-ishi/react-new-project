import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Child from './Child.js'

const cold = ReactDOM.createRoot(document.getElementById('fan'));
cold.render(
    <>
    <Child/>
  <App />
    
    </>
  
  

);
