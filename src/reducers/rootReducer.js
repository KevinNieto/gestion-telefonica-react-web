import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { centroReducer } from './centroReducer';
import { departamentoReducer } from './departamentoReducer';
import { temporalReducer } from './temporalReducer';
import { lineaReducer } from './lineaReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    centros: centroReducer,
    departamentos: departamentoReducer,
    temporales: temporalReducer,
    lineas: lineaReducer,
    // TODO: AuthReducer
})

