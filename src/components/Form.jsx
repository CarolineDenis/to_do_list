import React, { useState } from "react";

const Form = (props) => {
    const [todo, setTodo] = useState('');
    const [done, setToDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewTodo(todo, done)
        setTodo("")
        setToDone(false)
    }

    const handleTodo = (e) => { setTodo(e.target.value) };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>To Do:</label>
                    <input type="text" name="todo" value={todo} onChange={handleTodo} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form