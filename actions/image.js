import {
    FETCH_IMAGES_PENDING, 
    FETCH_IMAGES_SUCCESS, 
    FETCH_IMAGES_ERROR
} from '../constants/actionTypes'

export const fetchImagesPending = () => ({
    type: FETCH_IMAGES_PENDING
})

export const fetchImagesSuccess = (json) => ({
    type: FETCH_IMAGES_SUCCESS,
    data: json
})

export const fetchImagesError = (error) => ({
    type: FETCH_IMAGES_ERROR,
    error
})

export const fetchImages = count => dispatch => {
    if (count < 1 || count > 30)
        throw 'enter a number between 1 and 30'
    dispatch(fetchImagesPending())
    fetch(`https://api.unsplash.com/photos/random/?count=${count}`, 
    {
        method: 'GET',
        headers: {
            'Accept-Version': 'v1',
            'Authorization': 'Client-ID ravrs7fx-2ueQGvojyrFX6MfBJO0d_CXf0l81w6pUq8'
        },
        redirect: 'follow'
    })
        .then(res => res.json())
        .then(json => {
            if(json.error) {
                throw json.error
            }
            dispatch(fetchImagesSuccess(json))
            return res
        })
        .catch(error => {
            dispatch(fetchImagesError(error))
        })
}