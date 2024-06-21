import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Shop from './components/Shop';
import Detail from './components/Detail';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { BoxCategoriesProvider } from './context/BoxCategoriesContext'; 
import { CardProduct1Provider } from './context/CardProduct1Context';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
      <CardProduct1Provider> {/* Letakkan CardProduct1Provider di atas Routes */}
      <BoxCategoriesProvider> {/* Letakkan BoxCategoriesProvider di atas Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BoxCategoriesProvider>
      </CardProduct1Provider>
      </UserProvider>
    </Router>
  );
}

export default App;
