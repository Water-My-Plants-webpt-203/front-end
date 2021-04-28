import React, {useState} from 'react';
import { connect } from 'react-redux';
import { searchAPI } from '../state/actions'
import logo from '../images/logo.png';

const PlantForm = (props) => {
    const [ form, setForm ] = useState('');

    const handleChange = (e) => {
        setForm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.searchAPI(form)
    }

    return (
        <div className='form-container'>
            <div className='header'>
                <h1>New plant friend</h1>
                <img src={logo} />
            </div>
            <form onSubmit={handleSubmit} className="plantForm">
               <label>
                    <h3>Nickname</h3>
                    <input
                        type='text'
                        name='nickname'
                        onChange={handleChange}
                        value={form}
                    />
                </label> 
                <label> 
                    <h3>Species</h3>
                    <input
                        type='text'
                        name='species'
                    />
                </label>
                <label> 
                    <h3>H2O Frequency</h3>
                    <input
                        type='range'
                        name='frequency'
                    />
                </label>
                <label> 
                    <h3>Add Image</h3>
                    <input
                        type='file'
                        name='image'
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