import React from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[];
}

const UserList: React.FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user => <UserItem key={user.id} onClick={() => {}} user={user}/>)}
        </div>
    );
};

export default UserList;