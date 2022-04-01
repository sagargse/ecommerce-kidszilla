import './homePage.css'
import { useEffect } from "react";
import { Carousel } from '../../components/carousel/Carousel';
import { CarouselProduct } from '../../components/carousel/CarouselProduct';
import home from "../../assets/home.png"
export const HomePage=()=>{
    useEffect(()=>{
        document.title = "KidsZilla | Home"
      },[])
    return(
        <>
        <Carousel/>
        <div className="home-grid-container">
        <main className="top-home-section">
            <div className="home-image">
            <img src={home} alt="image" className="image-responsive"/>
            </div>
        </main>
        </div>
        <CarouselProduct/>
        </>
    );
};