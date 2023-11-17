import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import Digitalization from './views/Digitalization';
import News from './views/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/contacts' element={<Contacts /> }/>
        <Route path='/news' element={<News /> }/>
        <Route path='/Digitalization' element={<Digitalization /> }/>
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
