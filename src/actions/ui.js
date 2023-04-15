import { types } from '../types/types';



export const uiOpenModal = () => ({ type: types.uiOpenModal });
export const uiCloseModal = () => ({ type: types.uiCloseModal });

export const activeInformation = () => ({ type: types.activeInformation });
export const noActiveInformation = () => ({ type: types.noActiveInformation });