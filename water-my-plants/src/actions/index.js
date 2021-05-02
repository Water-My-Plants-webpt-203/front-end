import axios from 'axios'

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const RESULTS = 'RESULTS';

export const searchAPI = () => (dispatch) => {
    dispatch({ type: LOADING })
    axios
        .get('https://water-my-plants-203.herokuapp.com/api')
        .then(res => { 
            console.log(res)
            dispatch({ type: RESULTS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response)
            dispatch({
                type: ERROR, 
                payload: `${err.response.status} ${err.response.data}`});
        })
}