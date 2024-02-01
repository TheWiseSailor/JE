import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageRender from './Components/HomePageRender';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Products from './Components/Product/Product';
import Contact from './Components/Contacts/Contact';
import SignUp from './Components/SignUp/SignUp';
import ViewProducts from './Components/Product/ViewProducts/ViewProducts'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageRender />} />
          <Route path="/JE" element={<HomePageRender />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ViewProducts />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// add react carousel