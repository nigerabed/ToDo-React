import Button from "../Button/Button";
import Form from "../Form/Form";
import { useState } from "react";

export default function Main() {
    const [taskList, setTaskList] = useState([
        // {
        //     id: 1,
        //     task: "aaaa",
        //     done: false
        // },
        // {
        //     id: 2,
        //     task: "bbbbb",
        //     done: true
        // },
        // {
        //     id: 3,
        //     task: "ccccc",
        //     done: false
        // }

    ]);

    function addTask(taskInput) {

        let newid;
        if (taskList.length === 0) {
            newid = 1;
        } else {
            newid = taskList[taskList.length - 1].id + 1;
        }

        let newTask = {
            id: newid,
            task: taskInput,
            done: false,
            date: getCurrentDateTime()
        };

        setTaskList([...taskList, newTask]);
    }

    function getCurrentDateTime() {

        const date = new Date();

        return `${date.toLocaleDateString()} 
            ${date.toLocaleTimeString()}`;

    }

    const handleDelete = (id) => {

        let newTaskList = taskList.filter((task) => {
            if (task.id === id && task.done == true) {
                return false;
            } else {
                return true;
            }
        }
        )
        setTaskList(newTaskList);
    };

    const handleDeleteAll = () => {

        let newTaskList = taskList.filter((task) => {
            if (task.done) {
                return false;
            } else {
                return true;
            }
        }
        )
        setTaskList(newTaskList);
    };


    function handleCheckBox(id) {

        const newTaskList = taskList.map(item => {
            if (item.id == id) {
                item.done = !item.done;
            }
            return item;
        })
        setTaskList(newTaskList);
    }

    // function getCurrentDateTime() {

    //     const date = new Date();

    //     return `${date.toLocaleDateString()} 
    //             ${date.toLocaleTimeString()}`;

    // }

    const items = taskList.map((item) => (
        <li key={item.id}>

            <div>
                {(item.done) ? <input onClick={() => handleCheckBox(item.id)} type="checkbox" checked /> : <input onClick={() => handleCheckBox(item.id)} type="checkbox" />}

                {(item.done) ? <span className="todo-status">{item.task}</span> : <span>{item.task}</span>}

            </div>
            {/* <span className={(item.done) ?"todo-status": ""}>{item.task}</span> */}
            <div>
            <button>Edit</button>
            <Button className= "edit-delete-btn" onClick={() => handleDelete(item.id)} type="button" text="Delete" />
            <span className="time-added">Time added: {item.date}</span>

            </div>

        </li>
    ));

    return (
        <main>
            <Form addTask={addTask} />

            <ul>
                {items}
            </ul>
            {taskList.length > 1 && <button onClick={() => handleDeleteAll()} >Delete All</button>}

        </main>
    );
}
