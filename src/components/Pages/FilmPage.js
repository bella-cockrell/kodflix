import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import GetGallery from '../getGallery';
//Styling
import './FilmPage.css';

export default class Films extends React.Component {
/* const Films = ({param}} => {
    const
} */
    constructor() {
        super();
        this.state = {
            film: {},
            synopsis: {}
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
                <div className='container'>
                    <img
                    src={this.state.film.image}
                    alt={this.state.film.title} />
                    <h1 className='title'>
                        {this.state.film.title}
                    </h1>
                    <p className='synopsis'>
                        {this.state.film.synopsis}
                    </p>
                    <br />
                    <Link to='/'>Home</Link>
                    <Link to='/contactus'>Contact Us</Link>
                </div>
            );
        }
    }
}
