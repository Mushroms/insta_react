import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile" >
            <User src="https://static.zara.net/photos//mkt/spots/ss19-south-tonals-man/subhome//desktop-img-19-south-tonals-man.st.jpg?ts=1570639453960"
                alt="man"
                name="Scott"
            />

            <Palette />
        </div>
    )
}

export default Profile;
