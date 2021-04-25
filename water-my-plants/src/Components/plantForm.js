import React, {useState} from 'react';
import { connect } from 'react-redux';
import { searchAPI } from '../state/actions'

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
        <div className='container'>
            <form onSubmit={handleSubmit} className="plantForm">
               <label> Nickname
                    <input
                        type='text'
                        name='nickname'
                        onChange={handleChange}
                        value={form}
                    />
                </label> 
                <label> Species
                    <input
                        type='text'
                        name='species'
                    />
                </label>
                <label> H2O Frequency
                    <input
                        type='range'
                        name='frequency'
                    />
                </label>
                <label> Add Image
                    <input
                        type='file'
                        name='image'
                    />
                </label>
                <button type='submit'>Add new plant</button>
            </form>
        </div>
    )
}

export default connect(null, { searchAPI })(PlantForm);