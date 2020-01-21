import React from 'react';
import { Link } from 'react-router-dom';

export default function Films() {
    return (
            <div>
                <h1>Welcome to Films</h1>
                <p className='pPage'> Here, you'll be able to find a list of films in our catalogue.</p>
                <br/>
                <Link to='/'>Home</Link>
                <Link to='/contactus'>Contact Us</Link>
            </div>

    );
}