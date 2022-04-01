import "./App.css";
import "mockman-js/dist/style.css";
import Mockman from "mockman-js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { HomePage } from "./routes/homepage/HomePage";
import { ProductPage } from "./routes/productpage/ProductPage";
import { LoginPage } from "./routes/loginpage/LoginPage";
import { ProductProvider } from "./context/product-context";
import { Toast } from "./components/toast/toast";

function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Navbar/>
    <Toast/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<ProductPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mock" element={<Mockman />} />
        </Routes>
    </BrowserRouter> 
    <Footer/> 
    </div>
  );
}

export default App;
