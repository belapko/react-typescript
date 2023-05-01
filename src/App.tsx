import React, {useEffect, useState} from "react";
// import Card, {CardVariant} from "./components/Card";
// import UserList from "./components/UserList";
// import {ITodo, IUser} from "./types/types";
// import axios from "axios";
// import List from "./components/List";
// import UserItem from "./components/UserItem";
// import TodoItem from "./components/TodoItem";
// import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route, Routes, Link, useNavigate} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


const App = () => {
    return (
        <div>
            {/*<EventsExample/>*/}
            {/*<Card width='500px' height='300px' variant={CardVariant.primary}*/}
            {/*      onClick={(num) => console.log('YOU CLICKEEEEED CARD', num)}>*/}
            {/*    <button>Hello world</button>*/}
            {/*</Card>*/}
            {/*<UserList users={users}/>*/}
            {/*<List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user}/> } />*/}
            <BrowserRouter>
                <div>
                    <p><Link to={'/users'}>Users</Link></p>
                    <p><Link to={'/todos'}>Todos</Link></p>
                </div>
                <Routes>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
                    <Route path={'*'} element={<h1>Page not found</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;