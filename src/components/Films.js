import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import GetGallery from './getGallery';

export default class Films extends React.Component {

    constructor() {
        super();
        this.state = {
            film: {}
        };
    }

    componentDidMount() {
        let filmId = this.props.match.params.filmId;
        let film = GetGallery()
            .find((film) => film.id === filmId);
        this.setState({ film });
    }

    render() {
        if(this.state.film === undefined) {
            return <Redirect to='/not-found' />;
        } else {
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
}
