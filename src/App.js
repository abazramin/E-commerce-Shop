// import react router dom
import { Routes, Route } from "react-router-dom";
// import pages
import Home from "./Page/Home";
import ProductDetils from "./Page/ProductDetils";
// import Components
// import Hero from './Componets/Hero'
import Sidebar from './Componets/Sidebar'
// import Product from './Componets/Product'
import Header from './Componets/Header'
// import Cartitem from './Componets/CartItem'
import Footer from './Componets/Footer'
// 
function App() {
  return (
    <div className="overflow-hidden">
      {/* <Router> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetils />} />
      </Routes>
      <Sidebar />
      <Footer />
      {/* </Router > */}
    </div>
  );
}

export default App;
