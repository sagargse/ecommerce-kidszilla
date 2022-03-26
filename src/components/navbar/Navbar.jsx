import './navbar.css'
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
                <li><a href="./index.html">Home</a></li>
                <li><a href="/product-page/product.html">Shop</a></li>
                <li><a href="/wishlist-page/wishlist.html"><i className="fa fa-heart icons"></i>Wishlist</a></li>
                <li><a href="/cart-page/cart.html"><i className="fa fa-shopping-cart icons"></i>Cart</a></li>
                <li><a href="/authentication-page/signin.html"><i className="fa fa-user icons"></i>Signup/Signin</a></li>
            </div>
            <div className="nav-icons">
                <li><a href="./index.html">Home</a></li>
                <li><a href="/product-page/product.html">Shop</a></li>
                <li><a href="/authentication-page/signin.html"><i className="fa fa-user"></i></a></li>
                <li><a href="/wishlist-page/wishlist.html"><i className="fa fa-heart"></i><span className="items-quant">2</span></a></li>
                <li><a href="/cart-page/cart.html"><i className="fa fa-shopping-cart"></i><span className="items-quant">2</span></a></li>
            </div>
        </ul>
    </nav>
        </>
    );
}