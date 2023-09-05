import { REMOVE_SELECTED_ITEMS, SELECTED_ITEMS } from "./constant";

export const seletedItemsList=(data)=>{
    return {
        type:SELECTED_ITEMS,
        data:data
    }
}

export const removeSeletedItemsList=(data)=>{
    return {
        type:REMOVE_SELECTED_ITEMS,
        data:data
    }
}