const AddTodo = ({ onAddClick }) => {
    let input;

    return (
        <div>
            <input ref={node => {input = node;}} />
            <button onClick={onAddClick(input.value)}>Add Todo</button>
        </div>
    );
};
export default AddTodo;