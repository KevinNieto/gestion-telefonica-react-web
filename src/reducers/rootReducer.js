import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { centroReducer } from './centroReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    centros: centroReducer
    // TODO: AuthReducer
})

