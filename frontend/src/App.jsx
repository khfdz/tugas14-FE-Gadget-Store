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
import Api from './components/Api';
import ApiInformation from './components/ApiInformation'
import ApiProductDetail from './shared/ApiProductDetail';
import ApiBlog from './components/ApiBlog';
import ApiArticle from './components/ApiArticle';
import ApiCategories from './components/ApiCategories';
import { BoxCategoriesProvider } from './context/BoxCategoriesContext'; 
import { CardProduct1Provider } from './context/CardProduct1Context';
import { UserProvider } from './context/UserContext';
import { ApiProvider } from './context/ApiContext'

function App() {
  return (
    <Router>
      <ApiProvider>
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
          <Route path="/api" element={<Api />} />
          <Route path="/api-Information/:id" element={<ApiInformation />} />
          <Route path="/api-product-detail/:id" element={<ApiProductDetail />} />
          <Route path="/api-blog" element={<ApiBlog />} />
          <Route path="/api-article/:slug" element={<ApiArticle />} />
          <Route path="/api-categories/:id" element={<ApiCategories />} />
          
        </Routes>
      </BoxCategoriesProvider>
      </CardProduct1Provider>
      </UserProvider>
      </ApiProvider>
    </Router>
  );
}

export default App;
