import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { galleryOne, galleryTwo, galleryThree, galleryFour } from './data/images';
import GallerySection from './components/GallerySection';
import ImageDetail from './components/ImageDetail';
import Footer from './components/Footer';
import TshirtCustomizerApp from './components/TshirtCustomiserApp';
import Product from './components/Product';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <GallerySection {...galleryOne} galleryId="one" />
              <GallerySection {...galleryTwo} galleryId="two" />
              <GallerySection {...galleryThree} galleryId="three" />
              <GallerySection {...galleryFour} galleryId="four" />
            </>
          }
        />
        <Route
          path="/image/:galleryId/:imageIndex"
          element={<ImageDetail />}
        />
        <Route
          path="/product"
          element={<Product/>} // ✅ added this route
        />
      </Routes>

      {isHomePage && <Footer />}
    </>
  );
}

export default App;
