function Form(props) {
  return (
    <form>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button type="button" onClick={props.handleClick}>
        click
      </button>
    </form>
  );
}

export default Form;
