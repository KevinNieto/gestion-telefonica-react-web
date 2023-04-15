import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    information: false
}



export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }

        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
        

        case types.activeInformation:
            return {
                ...state,
                information: true
            }

        case types.noActiveInformation:
            return {
                ...state,
                information: false
            }
        default:
            return state;
    }


}