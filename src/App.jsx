import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
const App = () => {
  return(
    <div>
      <div className=" bg-[#FFA896] w-full">
        <Navbar/>
      </div>
      <div className="bg-[#FCF6F5]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default App;
