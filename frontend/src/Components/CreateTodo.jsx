import {useState} from 'react'
function CreateTodo({todos,setTodos}){
    const [title,setTitle]  = useState('');
    const [description,setDescription] = useState('');

    return(
        <div>
            <input type="text" placeholder = "title" onChange={(e)=>setTitle(e.target.value)} />
            <br />
            <input type="text" placeholder="description" onChange={(e)=>setDescription(e.target.value)} />
            <br />
            <button onClick={()=>{
                fetch('http://localhost:4004/todo',{
                    method:'POST',
                    body: JSON.stringify({
                        title:title,
                        description:description,
                        completed:false
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                .then(async function(res){
                    const data = await res.json();
                    alert('todo created')
                })
                setTodos([{title:title,description:description,completed:false},...todos])
                console.log('setted')
            }}>add to do </button>
        </div>
    )
    
}

export default CreateTodo