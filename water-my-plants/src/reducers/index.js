import { LOADING, ERROR, RESULTS } from '../actions/index'

const initialState = {
    error: '',
    loading: false,
    results: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                error: '',
                loading: true
            }
        case ERROR: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case RESULTS: 
            return {
                ...state,
                loading: false,
                results: action.payload,
                error: ''
            }        
        default:
            return state;
    }
}