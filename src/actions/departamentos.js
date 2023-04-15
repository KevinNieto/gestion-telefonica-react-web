import { types } from "../types/types";



export const departamentoAddNew = (departamento) => ({
    type: types.departamentoAddNew,
    payload: departamento
});

export const departamentoSetActive = (departamento) => ({
    type: types.departamentoSetActive,
    payload: departamento
});

export const departamentoUpdated = ( departamento ) => ({
    type: types.departamentoUpdated,
    payload: departamento
});


export const clearActiveDepartamento = () => ({ type: types.clearActiveDepartamento });

export const departamentoDeleted = () => ({ type: types.departamentoDeleted });
