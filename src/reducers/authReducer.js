import { types } from "../types/types";

const initialState = {
    isAuth: false,
}



export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                isAuth: true
            }

        case types.logout:
            return {
                ...state,
                isAuth: false
            }
        
        default:
            return state;
    }


}