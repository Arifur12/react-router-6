import { useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About.js";
// pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

function App() {
  // usestate can be used with one array
  const [cartIsEmpty] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products/*" element={<Products />} />
          {/* navigate instead of redirect */}
          <Route path="*" element={<Navigate to={"/"} />} />
          {/* jsx */}
          <Route
            path="/checkout"
            element={
              cartIsEmpty ? (
                <Navigate to={"/products"} />
              ) : (
                <p>nothing to see here</p>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
