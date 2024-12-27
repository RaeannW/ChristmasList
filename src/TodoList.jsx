import TodoItem from "./TodoItem";

export default function TodoList({todos, toggleTodo, deleteTodo}){
    return(
        <>
        <ul className="list">
        {todos.length === 0 ? "No Items Added" : ""}
        {/* for each todo, return li element */}
        {todos.map((todo) => {
          return (
            <TodoItem 
            {...todo} key={todo.id}//pass in props with spread, instead of using all of the below
            // id={todo.id} 
            // completed={todo.completed} 
            // title={todo.title} 
            toggleTodo={toggleTodo} deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      </>
    )

}