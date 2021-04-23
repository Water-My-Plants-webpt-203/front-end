import axios from 'axios'

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const RESULTS = 'RESULTS';

export const searchAPI = () => (dispatch) => {
    dispatch({type: LOADING})
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err});
        })
}