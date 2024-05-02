import Form from "../Form/Form";
import { useState } from "react";

export default function Main() {
    const [taskList, setTaskList] = useState([]);

    function addTask(task) {
        setTaskList([...taskList, task]);
    }

    const handleDelete = (index) => {
        const newList = [...taskList];
        newList.splice(index, 1);
        setTaskList(newList);
    };

    const items = taskList.map((item, index) => (
        <li key={index}>
            <input type="checkbox" />
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button> {/* Integrer delete event direkte her */}
        </li>
    ));

    return (
        <main>
            <Form addTask={addTask} />
            <ul>
                {items}
            </ul>
        </main>
    );
}
