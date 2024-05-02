export default function Input(props) {
    
    return (
        <input value={props.input} placeholder="Add task here" type={props.text} onChange={props.onChange} />
    )
}