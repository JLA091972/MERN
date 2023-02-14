import React from 'react'

const Todo = (props) => {
    const todoClasses = []

    if (props.todo.complete) {
        todoClasses.push("line-thru");
    }

    return (
        <div>
            <span className={todoClasses.join(" ")}>{props.todo.text}</span> &emsp;
            <input onChange={(e) => {
                props.handleTaskComplete(props.i)
            }} checked={props.todo.complete} type="checkbox" />


            <button onClick={(e) => {
                props.handleTodoDelete(props.i);
            }}>Delete</button>
        </div>
    );
}

export default Todo