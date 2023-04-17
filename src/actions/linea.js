import { types } from "../types/types";



export const lineaAddNew = (linea) => ({
    type: types.lineaAddNew,
    payload: linea
});


export const clearlineas = () => ({ type: types.clearLineas });

export const lineaDeleted = () => ({ type: types.lineaDeleted });

export const lineaSetActive = (linea) => ({
    type: types.lineaSetActive,
    payload: linea
});

export const clearActiveLinea = () => ({ type: types.clearActiveLinea });

