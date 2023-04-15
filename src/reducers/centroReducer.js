
import { types } from '../types/types';


const initialState = {
    centros: [{
        id: new Date().getTime(),
        name: 'Nombre de Prueba',
        descripcion: 'Descripcion de Prueba',

    }],
    activeCentro: null
};

export const centroReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.centroSetActive:
            return {
                ...state,
                activeCentro: action.payload
            }
        
        case types.centroAddNew:
            return {
                ...state,
                centros: [
                    ...state.centros,
                    action.payload
                ]
            }
    
        case types.centroClearActiveCentro:
            return {
                ...state,
                activeCentro: null
            }


        case types.centroUpdated:
            return {
                ...state,
                centros: state.centros.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        
        case types.centroDeleted:
            return {
                ...state,
                centros: state.centros.filter(
                    e => ( e.id !== state.activeCentro.id )
                ),
                activeCentro: null
            }

        default:
            return state;
    }


}