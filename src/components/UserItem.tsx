import React from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: React.FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: '15px', border: '2px solid #5372f0', margin: '10px'}}>
            {user.id}. {user.name} {user.email} {user.address.city} {user.address.street} {user.address.zipcode}
        </div>
    );
};

export default UserItem;