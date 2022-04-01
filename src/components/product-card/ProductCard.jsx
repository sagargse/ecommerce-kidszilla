import "../../styles/cards.css";
import "./productcard.css"
export const ProductCard = ({item}) => {
    return (
                <div style={item.includeStock===false ? {opacity:0.3} : {opacity: 1}} className="vertical-card simple-card" key={item.id}>
                    <img 
                    className="product-card-img"
                    src={item.image}
                    alt="product" 
                    />
                    <div className="card-desc-block">
                        <h1>{item.title}</h1>
                        <p>{item.categoryName}</p>
                        <span className="text-secondary">₹ {item.price}</span>
                        <div className="rating-container">
                            <i className="rating-icon checked fa fa-star"></i>
                            <i className="rating-icon checked fa fa-star"></i>
                            <i className="rating-icon checked fa fa-star"></i>
                            <i className="rating-icon checked fa fa-star"></i>
                            <i className="rating-icon fa fa-star"></i>
                        </div><br />
                        <div className="card-buttons">
                            <a className="cart-button">Add to Cart</a>
                            <a className="wish-button">Move to Wishlist</a>
                        </div>
                    </div>
                </div>
    );
}