
import { types } from '../types/types';


const initialState = {
    temporales: [],
    activeTemporal: null
};

export const temporalReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        

        
        case types.temporalAddNew:
            return {
                ...state,
                temporales: [
                    ...state.temporales,
                    action.payload
                ]
            }
    
        case types.temporalclearTemporal:
            return {
                temporales: []
            }

        case types.temporalSetActive:
            return {
                ...state,
                activeTemporal: action.payload
            }

        case types.clearActiveTemporal:
            return {
                ...state,
                activeTemporal: null
            }


        
        case types.temporalDeleted:
            return {
                ...state,
                temporales: state.temporales.filter(
                    e => ( e.id !== state.activeTemporal.id )
                ),
            }

        default:
            return state;
    }


}