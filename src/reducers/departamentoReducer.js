
import { types } from '../types/types';


const initialState = {
    departamentos: [{
        id: new Date().getTime(),
        nombre: 'Nombre de Prueba',
        limite: 3,
        usadas: 0,
        disponibles:3,
        centros:0, 
        centrosAsignadas: [],
        lineasAsignadas:[]

    }],
    activeDepartamento: null
};

export const departamentoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.departamentoSetActive:
            return {
                ...state,
                activeDepartamento: action.payload
            }
        
        case types.departamentoAddNew:
            return {
                ...state,
                departamentos: [
                    ...state.departamentos,
                    action.payload
                ]
            }
    
        case types.clearActiveDepartamento:
            return {
                ...state,
                activeDepartamento: null
            }


        case types.departamentoUpdated:
            return {
                ...state,
                departamentos: state.departamentos.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        
        case types.departamentoDeleted:
            return {
                ...state,
                departamentos: state.departamentos.filter(
                    e => ( e.id !== state.activeDepartamento.id )
                ),
                activeDepartamento: null
            }

        default:
            return state;
    }


}