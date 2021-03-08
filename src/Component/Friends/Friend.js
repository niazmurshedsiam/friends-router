import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle={
        border: '3px solid lightgray',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'

    }
    return (
        <div style={friendStyle}>
           <h1>Friend Name : {name}</h1>
           <p>Email : {email}</p>
           <p><Link to={`/friend/${id}`}>Show Id Details {id}</Link></p>

        </div>
    );
};

export default Friend;