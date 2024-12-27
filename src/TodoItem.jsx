export default function TodoItem ({completed, id, title, toggleTodo, deleteTodo}) {
    return(
        <li>
        <label>
          <input type="checkbox" 
          checked={completed} 
          //below determines if item is currently checked or not
          onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        {/* below calls a function when clicked to deleteTodo instead of running deleteTodo which will auto delete */}
        <button  
        onClick={() => deleteTodo(id)}
        className="delete">X</button>
      </li>
    )
}