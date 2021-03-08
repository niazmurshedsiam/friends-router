import React from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h1>This is Friend Detail Component : {friendId}</h1>
        </div>
    );
};

export default FriendDetail;