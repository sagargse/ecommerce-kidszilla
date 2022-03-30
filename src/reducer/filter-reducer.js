export const reducer = (state, action) => {
    switch (action.type) {
        case "LOW_TO_HIGH":
            return { ...state, sortBy: action.type };
        case "HIGH_TO_LOW":
            return { ...state, sortBy: action.type };
        case "INCLUDE_OUT_OF_STOCK":
            return { ...state, includeOutOfStock: !state.includeOutOfStock };
        case "PLASTIC_TOYS":
            return { ...state, plasticToys: !state.plasticToys };
        case "SOFT_TOYS":
            return { ...state, softToys: !state.softToys };
        case "HARD_TOYS":
            return { ...state, hardToys: !state.hardToys };
        case "FLEXIBLE_TOYS":
            return { ...state, flexibleToys: !state.flexibleToys };
        default:
            return state;
    }
};