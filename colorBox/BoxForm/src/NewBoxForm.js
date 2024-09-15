import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

 function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: "",
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
        const boxData = {
            height: formData.height || 5,
            width: formData.width || 5,
            backgroundColor: formData.backgroundColor || "brown",
            id: uuid(),
        };
        createBox(boxData);
        setFormData({ height: "", width: "", backgroundColor: "" });
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="height"
                    value={formData.height}
                    id="height"
                    />
                </div>
                <div>
                <label htmlFor="width">Height</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="width"
                    value={formData.width}
                    id="width"
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    id="backgroundColor"
                />
            </div>
            <button id="newBoxButton">Add a new box!</button>
            </form>
        </div>
    )
 }
 
export default NewBoxForm;
