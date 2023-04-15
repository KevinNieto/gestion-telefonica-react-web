
import { types } from '../types/types';


const initialState = {
    lineas: [],
    activeLinea: null
};

export const lineaReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        

        
        case types.lineaAddNew:
            return {
                ...state,
                lineas: [
                    ...state.lineas,
                    action.payload
                ]
            }
    
        case types.clearLinea: 
            return {
                lineas: []
            }

        case types.lineaSetActive:
            return {
                ...state,
                activeLinea: action.payload
            }

        case types.clearActiveLinea:
            return {
                ...state,
                activeLinea: null
            }


        
        case types.lineaDeleted:
            return {
                ...state,
                lineas: state.lineas.filter(
                    e => ( e.id !== state.activeLinea.id )
                ),
            }

        default:
            return state;
    }


}