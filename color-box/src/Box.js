function Box(props) {
    const colors = {
      display: 'inline-block',
      width: `${props.width}em`,
      height: `${props.height}em`,
      backgroundColor: `${props.backgroundColor}`,
    };

    const remove = () => props.handleRemove(props.id);
  
    return (<div>
        <div style={colors}></div>
        <button onClick={remove}>X</button>
    </div>)
  }

  export default Box;