import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const PlantGallery = () => {
    return (
        <div className='gallery-container'>
            <div className='header'>
                <h1>Plant Gallery</h1>
                <Link to='/plantForm'>
                    <button>Add/Edit</button>
                </Link>
            </div>
            <div className="boxes-container">
                <div className='boxes'>
                    <div className='content'>
                        <img src='https://www.wagnergreenhouses.com/wp-content/uploads/2018/04/bonsai.jpg' />
                        <h1>Bonny</h1>
                    </div>
                </div>
                <div className='boxes'>
                    <div className='content'>
                        <img src='https://www.wagnergreenhouses.com/wp-content/uploads/2018/04/bonsai.jpg' />
                        <h1>Bonny</h1>
                    </div>    
                </div>
                <div className='boxes'>
                    <div className='content'>
                        <img src='https://www.wagnergreenhouses.com/wp-content/uploads/2018/04/bonsai.jpg' />
                        <h1>Bonny</h1>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default connect()(PlantGallery);

