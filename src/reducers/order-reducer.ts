import type { MenuItem, OrderItem } from "../types";

export type OrderActions = 
    {type: 'add-item', payload: { item : MenuItem}} |
    {type: 'remove-item', payload: { item : MenuItem['id']}} |
    {type: 'place-orden', payload: { item : MenuItem['id']}} |
    {type: 'add-tip', payload: { value : number}}

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const InitialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = InitialState,
    action: OrderActions
) => {
        if(action.type  === 'add-item') {
            return {
                ...state
            }
        }

        if(action.type  === 'remove-item') {
            return {
                ...state
            }
        }

        if(action.type  === 'place-orden') {
            return {
                ...state
            }
        }

        if(action.type  === 'add-tip') {
            return {
                ...state
            }
        }
    return state
}