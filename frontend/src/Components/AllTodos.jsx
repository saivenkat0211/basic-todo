
function AllTodos({todos}){
    console.log(todos)
    return (
        <div>
        
            {todos.map(function(todo){
                // console.log(todo);
                
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={()=>{
                            fetch('http://localhost:4004/completed',{
                                method:'PUT',
                            
                                body: JSON.stringify({
                                    id: todo._id
                                }),
                                headers:{
                                    "Content-type":"application/json"
                                }
                            })
                        }}>{todo.completed == true ? 'completed' : 'complete the task'}</button>
                    </div>)
            })}
                
        </div>
    )
}
export default AllTodos