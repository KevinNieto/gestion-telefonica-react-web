import { types } from "../types/types";



export const temporalAddNew = (temporal) => ({
    type: types.temporalAddNew,
    payload: temporal
});

export const useTemporals = (temporal) => ({
    type: types.useTemporals,
    payload: temporal
});



export const clearTemporales = () => ({ type: types.clearTemporales });

export const temporalDeleted = () => ({ type: types.temporalDeleted });

export const temporalSetActive = (temporal) => ({
    type: types.temporalSetActive,
    payload: temporal
});

export const clearActiveTemporal = () => ({ type: types.clearActiveTemporal });

