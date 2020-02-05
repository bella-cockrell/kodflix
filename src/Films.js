import React from 'react';
import { Link } from 'react-router-dom';
import getGallery from './getGallery';
import Card from './Card';


export default class Films extends React.Component {
    constructor() {
        super();

        this.state = { 
            message: 'Hello, this will be the details page for each movie & tv show :)'
        }
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                message : 'Coming soon :)'
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                {/* <p className='pPage'> {
                getGallery().map(film => (
                    <Card 
                        key = {film.id}
                        title = {film.title} />
                ))
                }
                </p> */}
                <p className='pPage'>
                    {this.state.message}
                </p>
                <br />
                <Link to='/'>Home</Link>
                <Link to='/contactus'>Contact Us</Link>
            </div>
        );
    }
}
