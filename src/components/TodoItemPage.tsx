import React, {useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

type TodoItemPageParams = {
    id: string;
}

const TodoItemPage: React.FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams<TodoItemPageParams>();
    const navigate = useNavigate()

    useEffect(() => {
        fetchTodo();
    }, [])


    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id)
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/todos')}>Back</button>
            <h1>Title of todo is {todo?.title}</h1>
        </div>
    );
};

export default TodoItemPage;