import React from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
    onclick: (todo: ITodo) => void;
}


const TodoItem:React.FC<TodoItemProps> = ({todo, onclick}) => {
    return (
        <div>
            <div onClick={() => onclick(todo)} style={{padding: '15px', border: '2px solid #5372f0', margin: '10px'}}>
                <input type={'checkbox'} checked={todo.completed}/>
                {todo.id}. {todo.title}
            </div>
        </div>
    );
};

export default TodoItem;