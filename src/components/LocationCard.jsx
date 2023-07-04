import React from 'react';
import loc from '../images/loc.svg'
function LocationCard() {
    return (
        <div className=''>
            <img className='h-full w-full' alt="Location image" src={loc}></img>
        </div>
    );
}

export default LocationCard;