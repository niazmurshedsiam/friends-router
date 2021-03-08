import React from 'react';

const Friend = (props) => {
    const {name,email} = props.friend;
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

        </div>
    );
};

export default Friend;