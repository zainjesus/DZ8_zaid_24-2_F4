import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ParentComponent from './fistoption';
import ParentComponent2 from './twiceoption';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentComponent />
    <ParentComponent2 />
  </React.StrictMode>
);

