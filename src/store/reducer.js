import { REMOVE_SELECTED_ITEMS, SELECTED_ITEMS } from "./constant";

export const allGames=(data=[],action)=>{
    switch(action.type){
        case SELECTED_ITEMS: return [action.data,...data];
        case REMOVE_SELECTED_ITEMS: {
            const res=data.filter((obj)=>{
                return obj.id!==action.data.id;
            })
            return res;
        }
        default: return [];
    }
    
}