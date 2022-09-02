import React, { useState } from "react";

const Todolist = (props) => {
    const {currentTodo, list, setList} = props

    const handleDone = (i) => { 
        list[i].done = !list[i].done
        setList([...list])
    }

    const deleteTodo = (i) => {
        props.onDelete(i)
    }

    return (
        <div>
            {list.map((item, i) => 
            <div key={i} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <ul>
                    <li  style= { list[i].done? {textDecoration: "line-through"} : {textDecoration: "none"}} > {item.todo} </li>
                </ul>

                <input style={{margin:"20px"}} value={item.done} type="checkbox" checked = {item.done} onChange={() => handleDone(i)} />

                <button value= {item} style={{margin:"20px"}}onClick={() =>deleteTodo(i)}>Delete</button>

            </div>
            )}
        </div>
    )
}

export default Todolist