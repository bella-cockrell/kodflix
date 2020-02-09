import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      Ooops... this page doesn't exist. Try again.
      <br/>
      <Link to='/'>Home</Link>
      <Link to='/contactus'>Contact Us</Link>
    </div>
  )
}
