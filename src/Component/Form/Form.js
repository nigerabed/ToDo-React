import Input from "../Input/Input"
import Button from "../Button/Button"
import { useState } from "react"

export default function Form(props) {

  const [input, setInput] = useState("")


  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() !== "") {
      props.addTask(input);
      setInput("");
    }
  }



  function handleChange(event) {
    setInput(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="newTaskForm" >
      <Input onChange={handleChange} text={"text"} input={input}/>
      <Button text="Add Task" />
    </form>
  )
}


