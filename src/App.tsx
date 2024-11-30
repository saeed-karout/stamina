import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/master/Navbar";
import Footer from "./components/master/Footer";
import Product from "./pages/Products/Product";
import Search from "./pages/Products/Search";
import NotFound from "./pages/NotFound";
import Compare from "./pages/Products/Compare";
import Spaces from "./pages/Spaces";
import Category from "./pages/Products/Category";
import Products from "./pages/Products";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Home - Stamina</title>
        <meta name="description" content="Welcome to Stamina" />
        <link rel="icon" href="../logo.png" />
      </Helmet>
      <Navbar />
      <div className="mt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/category/:slug" element={<Category />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/products/search/:slug" element={<Search />} />
          <Route path="/products/compare/:p1/vs/:p2" element={<Compare />} />
          <Route path="/products/compare/:p1" element={<Compare />} />
          <Route path="/products" element={<Products />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="*" element={<NotFound />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
