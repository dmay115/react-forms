import React, { useState } from "react";
import ToDo from "./ToDo"
import NewToDoForm from "./NewToDoForm"

function ToDoList() {
    const [toDos, setToDos] = useState([]);
    const newToDo = toDoInfo => {
        setToDos(toDos => [...toDos, toDoInfo])
    }
    const remove = id => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
    }

    const toDoDetails = toDos.map(toDo => (
        <ToDo
        key={toDo.id}
        id={toDo.id}
        text={toDo.text}
        handleRemove={remove}
        />
    ));

    return (
        <div>
            <NewToDoForm createToDo={newToDo} />
            {toDoDetails}
        </div>
    )
}

export default ToDoList;