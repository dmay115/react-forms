import React, { useState } from "react";
import {v4 as uuid} from "uuid"

function NewToDoForm({ createToDo }) {
    const [formData, setFormData] = useState({
        text: "",
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const gatherInput = evt => {
        evt.preventDefault();
        const toDoData = {
            text: formData.text,
            id: uuid()
        };
        createToDo(toDoData);
        setFormData({ text: ""})
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="text">Your ToDo</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="text"
                    value={formData.text}
                    id="text"
                    />
                </div>
                <button id="newToDoButton">Add ToDo</button>
            </form>
        </div>
    )
}

export default NewToDoForm;