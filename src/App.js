import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Error from './components/Error/Error';
import Categories from './components/Categories/Categories';
import Expenses from './components/Expenses/Expenses';

export const ModalContext = React.createContext();

function App() {
  return (
    <>
      <BrowserRouter className='main'>
        <Header />
        <Routes>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/' element={<Expenses />}>
            Расходы
          </Route>
          <Route path='about' element={<About />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
