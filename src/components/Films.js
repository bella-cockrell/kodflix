import React from 'react';
import { Link } from 'react-router-dom';
import GetGallery from './getGallery';


export default class Films extends React.Component {

    constructor() {
        super();
        this.state = {
            film: {}
        };
    }

    componentDidMount() {
        let filmId = this.props.match.params.filmId; //name of routing param
        let film = GetGallery()
            .find((film) => film.id === filmId);
        this.setState({ film });
    }

    render() {
        return (
            <div>
                <p className='pPage'>
                    {this.state.film.title}
                </p>
                <br />
                <Link to='/'>Home</Link>
                <Link to='/contactus'>Contact Us</Link>
            </div>
        );
    }
}
