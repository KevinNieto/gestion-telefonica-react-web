import { types } from "../types/types";



export const centroAddNew = (centro) => ({
    type: types.centroAddNew,
    payload: centro
});

export const centroSetActive = (centro) => ({
    type: types.centroSetActive,
    payload: centro
});

export const centroUpdated = ( centro ) => ({
    type: types.centroUpdated,
    payload: centro
});


export const centroClearActiveCentro = () => ({ type: types.centroClearActiveCentro });

export const centroDeleted = () => ({ type: types.centroDeleted });
