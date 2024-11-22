

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About'; 
import Contact from './pages/Contact'
import Navbar from './components/master/Navbar';
import Footer from './components/master/Footer';

function App() {
  return (
   <>
     <Navbar />
     <div className='mt-24'>

     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path='/contact' element={<Contact />} />
       {/* Add more routes as needed */}
     </Routes>
     </div>
     <Footer />
   </>
  );
}

export default App;
