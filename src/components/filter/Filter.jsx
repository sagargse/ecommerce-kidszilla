import './filter.css';
export const Filter = ({ dispatch, state }) => {
    const { includeOutOfStock } = state;
    return (
        <aside className="left-aside-bar">
            <div className="filter-header">
                <h3>Filters</h3>
                <a href="" className="clear-btn">Clear All</a>
            </div>
            <hr />
            <div className="filter-body-container">
                <div className="sort-body-container">
                    <h4>SORT BY</h4>
                    <div className="sort-by-price">
                        <input
                            type="radio"
                            name="sort-by-price"
                            id="low-to-high"
                            checked={state.sortBy === "LOW_TO_HIGH"}
                            onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                        />
                        <label for="low-to-high">Price: Low-to-High</label>
                    </div>
                    <div className="sort-by-price">
                        <input
                            type="radio"
                            name="sort-by-price"
                            id="high-to-low"
                            onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                        />
                        <label for="high-to-low">Price: High-to-Low</label>
                    </div>
                </div>
                <hr />
                <div className="category-body-container">
                    <h4>CATEGORY</h4>
                    <div className="sort-by-category">
                        <input
                            type="checkbox"
                            name="category"
                            id="Plastic toys"
                            checked={state.plasticToys}
                            onChange={() => dispatch({ type: "PLASTIC_TOYS" })}
                        />
                        <label for="toys">Plastic Toys</label>
                    </div>
                    <div className="sort-by-category">
                        <input
                            type="checkbox"
                            name="category"
                            id="Soft toys"
                            checked={state.softToys}
                            onChange={() => dispatch({ type: "SOFT_TOYS" })}
                        />
                        <label for="toys">Soft Toys</label>
                    </div>
                    <div className="sort-by-category">
                        <input
                            type="checkbox"
                            name="category"
                            id="Hard toys"
                            checked={state.hardToys}
                            onChange={() => dispatch({ type: "HARD_TOYS" })}
                        />
                        <label for="toys">Hard Toys</label>
                    </div>
                    <div className="sort-by-category">
                        <input
                            type="checkbox"
                            name="category"
                            id="Flexible toys"
                            checked={state.flexibleToys}
                            onChange={() => dispatch({ type: "FLEXIBLE_TOYS" })}
                        />
                        <label for="toys">Flexible Toys</label>
                    </div>
                </div>
                <hr />
                <div className="filtertype-body-container">
                    <h4>FILTER TYPE</h4>
                    <div className="sort-by-filter">
                        <input
                            id="Include out of stock"
                            type="checkbox"
                            checked={includeOutOfStock}
                            onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
                        />
                        <label for="Include out of stock">Include out of stock</label>
                    </div>
                </div>
            </div>
        </aside>
    );
}