import React from 'react';

import { ReactComponent as Trash } from './../../assets/todos/trash.svg';
import { ReactComponent as Edit } from './../../assets/todos/edit.svg';

const Todo = (props) => {
    return (
        <div className="todo">
            <div className="todo__content">
                <h6>{props.data.category}</h6>
                <p>{props.data.content}</p>
            </div>
            <div className="todo__icons">
                <Trash onClick={props.removeTodo} />
                <Edit onClick={props.toggleTodoForm} />
            </div>
        </div>
    );
}

export default Todo;