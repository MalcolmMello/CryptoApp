import { reducerActionTypes } from '../types/reducerActionTypes'

export type ThemeType = {
    theme: 'light' | 'dark'
}

export const themeInitialState: ThemeType = {
    theme: 'light'
}

export const themeReducer = (state: ThemeType, action: reducerActionTypes) => {
    switch(action.type) {
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload.theme }
    }

    return state
}