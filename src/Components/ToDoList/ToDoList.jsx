import React, { useState } from "react";
import './ToDoList.css'

export default function ToDoList() {

    const [tasks, setTasks] = useState(['Go To Work', 'Deposit some Money']);
    const [newTask, setNewTask] = useState();

    const handleInputChange = (event) => {
        setNewTask(t => event.target.value)
    }

    const handleAddTask = () => {
        if(newTask.trim() == "" || newTask.length <= 3) return;
        console.log(newTask);
        setTasks(t => [...t, newTask])
        setNewTask("");
    }

    const deleteTask = (index) => {
        setTasks(t => tasks.filter((_, i) => i !== index));
    }

    const moveTaskUp = (index) => {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1] ] = 
            [updatedTasks[index - 1], updatedTasks[index] ] 
            setTasks(t => updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        console.log(index,tasks.length);
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1] ] = 
            [updatedTasks[index + 1], updatedTasks[index] ] 
            setTasks(t => updatedTasks);
        }
    }
    return <div className="to-do-list">
        <h2>To Do List </h2>
        {/* <p>task : {newTask}</p> */}
        <div>
            <input type='text' value={newTask} onChange={handleInputChange} placeholder="Insert New Task"></input>
            <button className="add-button" onClick={handleAddTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className="move-up-button"
                        onClick={() => moveTaskUp(index)}>
                        <img src="https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-medium/261d-fe0f.png" alt="UP" />
                    </button>
                    <button className="move-down-button"
                        onClick={() => moveTaskDown(index)}>
                        <img src="https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-medium/1f447.png" alt="UP" />
                    </button>
                </li>

            )}

        </ol>

    </div>
}