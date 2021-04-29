import axios from 'axios'

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const RESULTS = 'RESULTS';

export const searchAPI = () => (dispatch) => {
    dispatch({type: LOADING})
   // https://i.picsum.photos/id/106/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            console.log(res)
            dispatch({ type: RESULTS, payload: res.data.results })
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err});
        })
}