import * as ActionsType from '../../constants/ActionType'


export const SHOW_MODAL = 'SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'


export const showModal = (data) => {
     return {
         type: SHOW_MODAL,
         payload: {
             data
         }
     }
 }

 export const closeModal = () => {
     return {
         type: CLOSE_MODAL,
     }
 }