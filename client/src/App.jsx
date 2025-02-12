import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  return (
    <main className="">
      <ScrollToTop/>
      <Navbar/>
      <Outlet />
      <Footer/>
    </main>
  );
};

export default App;
