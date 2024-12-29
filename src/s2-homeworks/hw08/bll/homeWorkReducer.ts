import { stat } from 'fs';
import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

    export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => {
        switch (action.type) {
            case 'sort': {
                if (action.payload === 'up') {
                    // Сортируем массив по возрастанию имени
                    return [...state].sort((a, b) => a.name.localeCompare(b.name, 'ru', { sensitivity: 'base' }));
                } else {
                    // Сортируем массив по убыванию имени
                    return [...state].sort((a, b) => b.name.localeCompare(a.name, 'ru', { sensitivity: 'base' }));
                }
            }
            case 'check': {
                // Фильтруем и сортируем только взрослых пользователей
                return [...state]
                    .filter(user => user.age > 18)
                 
            }
            default:
                return state;
        }
    };