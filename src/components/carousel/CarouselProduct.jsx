import { v4 as uuid } from "uuid";
import toy6 from "../../assets/toy6.jpg";
import toy7 from "../../assets/toy7.jpg";
import toy5 from "../../assets/toy5.jpg";
import toy4 from "../../assets/toy4.jpg";
const proCategories =[
    {
        id: uuid(),
        proCategoryName: 'Game Device',
        proImage: toy6,
    },
    {
        id: uuid(),
        proCategoryName: 'Cars Toys',
        proImage: toy7,
    },
    {
        id: uuid(),
        proCategoryName: 'Clay Toys',
        proImage: toy5,
    },
    {
        id: uuid(),
        proCategoryName: 'Plastic Toys',
        proImage: toy4,
    }
];
export const CarouselProduct = ()=>{
    return (
        <section className="bottom-home-section">
            <div className="product-category">
                {proCategories.map(item =>
                    <div className="category-1">
                        <img src={item.proImage} alt="toy" className="toy-img" />
                        <div className="overlay">
                            <div className="text">{item.proCategoryName}</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}