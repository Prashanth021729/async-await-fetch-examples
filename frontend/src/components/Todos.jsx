const Todos = ({todo}) =>{
    if (!todo || !Array.isArray(todo)) {
        return <p>No todos available</p>; 
      }
    return(
        <div className=" bg-blue-400">
        {todo.map((todo1,index)=>{
           return <div key={index}>
            <p className="bg-amber-100 p-2">{todo1.title}</p>
            <p>{todo1.description}</p>
            <button>{todo1.completed === true ? "Done" : "Mark as done"}</button>
        </div>
        })}
        </div>
    )
};

export default Todos;
