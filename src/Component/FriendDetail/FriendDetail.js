import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = (props) => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({});
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=> setFriend(data))
    },[])
    return (
        <div>
            <h1>This is Friend Detail Component : {friendId}</h1>
            <p>{friend.name}</p>
            {friend.email}
        </div>
    );
};

export default FriendDetail;