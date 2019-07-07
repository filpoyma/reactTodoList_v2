import React from 'react';
import ToDoListItem from './ToDoListItem'
import './ToDoList.css'

const ToDoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                {/*<ToDoListItem label={item.label} important={item.important}/>*/}
                <ToDoListItem {...itemProps}/>
            </li>);
    });
    console.log(elements);
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;