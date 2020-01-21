import React from 'react';
import { Link } from 'react-router-dom';

export default function Films() {
    return (
        <Link to='/films'>
            <div>Welcome to Films</div>
            <Link to='/'>Home</Link>
            <Link to='/films'>Films</Link>
            <Link to='/contactus'>Contact Us</Link>
        </Link>
    );
}