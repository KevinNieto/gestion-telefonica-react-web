import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { centroReducer } from './centroReducer';
import { departamentoReducer } from './departamentoReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    centros: centroReducer,
    departamentos: departamentoReducer
    // TODO: AuthReducer
})

