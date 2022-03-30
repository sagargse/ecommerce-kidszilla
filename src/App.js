import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { HomePage } from "./routes/homepage/HomePage";
import { ProductPage } from "./routes/productpage/ProductPage";
import { ProductProvider } from "./context/product-context";

function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<ProductPage/>}/>
        </Routes>
    </BrowserRouter> 
    <Footer/> 
    </div>
  );
}

export default App;
