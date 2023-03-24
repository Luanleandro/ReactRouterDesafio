import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Produto from './Components/Produto';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produtos/:id" element={<Produto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
