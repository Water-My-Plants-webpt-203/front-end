import React from 'react'
import { PlantForm } from './plantForm'; 
import { Link, Route } from 'react-router-dom'

const PlantGallery = () => {
    return (
        <div className='container'>
            <div className='links'>
                <h1>Plant Gallery</h1>
                <Link to='/plantForm'>
                    Add/Edit
                </Link>
            </div>
            <div className='routes'>
                <Route path='/plantForm'>
                    <PlantForm/>
                </Route>    
            </div>
        </div>
    )
}

export default PlantGallery;