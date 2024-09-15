import React from "react"

function ToDo({
    id,
    handleRemove,
    text
}){
    const remove = () => handleRemove(id);
    return (
        <div>
            {text}
            <button onClick={remove}>X</button>
        </div>
    )
}

export default ToDo;