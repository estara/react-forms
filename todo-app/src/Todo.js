function Todo(props) {
    const remove = () => props.handleRemove(props.id);
  
    return (<div>
        <div key={props.id}>{props.task}</div>
        <button onClick={remove}>X</button>
    </div>)
  }

  export default Todo;