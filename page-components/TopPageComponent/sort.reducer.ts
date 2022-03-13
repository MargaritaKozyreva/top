import { ProductDTO } from "interfaces/product.interface";
import { SortEnum } from "../../components/Sort/Sort";

export type SortActions = {type: SortEnum.Price} | {type: SortEnum.Raiting };

export interface SortReducerState {
    sort: SortEnum;
    products: ProductDTO.Model[];
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
    switch (action.type) {
        case SortEnum.Raiting:
            return {
                sort: SortEnum.Raiting,
                products: state.products.sort((a,b) => a.initialRating > b.initialRating ? -1 : 1)
            }
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a,b) => a.price > b.price ? -1 : 1)
            }

    
        default:
            return state
    }
}