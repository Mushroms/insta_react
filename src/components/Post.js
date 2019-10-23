import React, { Component } from 'react';
import User from './User';


export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://static.zara.net/photos//mkt/spots/ss19-south-tonals-man/subhome//desktop-img-19-south-tonals-man.st.jpg?ts=1570639453960"
                    alt="man"
                    name="Scott"
                    min />
                <img src={this.props.src} alt={this.props.alt}>
                </img>
                <div className="post__name">

                </div>
                <div className="post__descr"> Test. test, test.

                </div>

            </div>
        )
    }
}