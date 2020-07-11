import {
    FETCH_IMAGES_PENDING, 
    FETCH_IMAGES_SUCCESS, 
    FETCH_IMAGES_ERROR
} from '../constants/actionTypes'

const initialState = {
    fetching: true,
    images: [],
    error: null
}

export const imagesReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_IMAGES_PENDING: 
            return {
                ...state,
                fetching: true
            }
        case FETCH_IMAGES_SUCCESS: 
            return {
                ...state,
                fetching: false,
                images: [...state.images, ...action.data]
            }
        case FETCH_IMAGES_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        default:
            return state
    }
}

export const getImages = state => state.images
export const getFetching = state => state.fetching
export const getError = state => state.error

