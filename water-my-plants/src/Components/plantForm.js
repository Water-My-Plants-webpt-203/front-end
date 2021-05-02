import React, {useState} from 'react';
import { connect } from 'react-redux';

import { searchAPI } from '../actions';
import logo from '../images/logo.png';


const PlantForm = (props) => {
    const [ form, setForm ] = useState('');
    const [ nickName, setNickName ] = useState('');
    const [ species, setSpecies ] = useState('');
    const [ frequency, setFrequency ] = useState('')
    const [ image, setImage ] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPlant = { nickName, species, frequency, image } ;
        // props.searchAPI(form)
        console.log(newPlant)
    }

    return (
        <div className='form-container'>
            <div className='header'>
                <h1>Add A New <span>plant</span></h1>
                <img src={logo} />
            </div>

            <form onSubmit={handleSubmit} className="plantForm">
               <label>
                    <input 
                        className='text'
                        name='nickname'
                        placeholder='NICKNAME'
                        type='text'
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                    />
                </label> 
                <label> 
                    <input
                        className='text'
                        name='species'
                        placeholder='SPECIES'
                        type='text'
                        value={species}
                        onChange={(e) => setSpecies(e.target.value)}
                    />
                </label>
                <label> 
                    <input
                        className='text'
                        name='frequency'
                        placeholder='H2O Frequency'
                        type='text'
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                    />
                </label>
                <label> 
                    <h3>Add Image</h3>
                    <input
                        name='image'
                        type='file'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <div className='button-container'>
                    <button type='submit'>
                        Add new plant
                    </button>
                </div>    
            </form>
        </div>
    )
}

export default connect(null, { searchAPI })(PlantForm);