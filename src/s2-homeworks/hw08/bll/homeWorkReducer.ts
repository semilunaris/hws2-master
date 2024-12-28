import { stat } from 'fs';
import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { 
            if(action.payload === 'up'){
          let sortName = state.sort(((a, b) => a.name.localeCompare(b.name, 'ru', { sensitivity: 'base' })))
          return sortName
        }else{
            let sortName =   state.sort(((a, b) => b.name.localeCompare(a.name, 'ru', { sensitivity: 'base' })))
            return sortName
        }

        }
        case 'check': {
             const adult = state.filter(u => u.age > 18)
             return adult
            
        }
        default:
            return state
    }
}
