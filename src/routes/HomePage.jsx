import './homePage.css'
import { Navbar } from "../components/navbar/Navbar"
import { Footer } from "../components/footer/Footer"
import { Carousel } from '../components/carousel/Carousel';
import { CarouselProduct } from '../components/carousel/CarouselProduct';
import home from "../../src/assets/home.png"
export default function HomePage(){
    return(
        <>
        <Navbar/>
        <Carousel/>
        <div className="home-grid-container">
        <main className="top-home-section">
            <div className="home-image">
            <img src={home} alt="image" className="image-responsive"/>
            </div>
        </main>
        </div>
        <CarouselProduct/>
        <Footer/>
        </>
    );
}