import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const PlantGallery = () => {
    return (
        <div className='gallery-container'>
            <div className='header'>
                <h1><span>Plant</span> Gallery</h1>
                <nav>
                    <Link to='/plantForm'>
                        <button>Add Plant</button>
                    </Link>
                    <Link to='/plantForm'>
                        <button>Edit Plant</button>
                    </Link>
                </nav>
            </div>
            
        </div>
    )
}

export default connect()(PlantGallery);

