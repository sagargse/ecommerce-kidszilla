import './navbar.css'
import { Link } from 'react-router-dom';
export const Navbar = () =>{
    return(
        <>
        <nav className="navbar">
        <ul className="header-container">
            <li className="logo">KidsZilla</li>
            <li className="search-bar">
                <input type="search" placeholder="search"></input>
                <span className="search-icon fa fa-search"></span>
            </li>
            <input type="checkbox" id="click"></input>
            <label for="click" className="menu-btn"><span className="hamburger-menu fa fa-bars"></span></label>
            <div className="responsive-icons">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/"><i className="fa fa-heart icons"></i>Wishlist</Link></li>
                <li><Link to="/"><i className="fa fa-shopping-cart icons"></i>Cart</Link></li>
                <li><Link to="/"><i className="fa fa-user icons"></i>Signup/Signin</Link></li>
            </div>
            <div className="nav-icons">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/login"><i className="fa fa-user"></i></Link></li>
                <li><Link to="/"><i className="fa fa-heart"></i><span className="items-quant">2</span></Link></li>
                <li><Link to="/"><i className="fa fa-shopping-cart"></i><span className="items-quant">2</span></Link></li>
            </div>
        </ul>
    </nav>
        </>
    );
}