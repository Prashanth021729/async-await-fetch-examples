import { useState } from "react";

const Createtodo = () =>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return(
        <div className="text-center mt-5">
            <input className="border-2 border-amber-950 " placeholder="Work to complete" onChange={function(e){
                const value = e.target.value;
                setTitle(value);
            }}>
            </input>
            <input className="border-2 border-amber-950" placeholder="Description" onChange={function(e){
                const value = e.target.value;
                setDescription(value);
            }}
            ></input>
            <button className="border-2 border-amber-950  " onClick={async ()=>{
            const response = await fetch("http://localhost:3001/todo",{
                    method: "POST",
                    body:JSON.stringify({
                        title:title,
                        description:description,
                     }),
                     headers:{
                        "content-Type":"application/json"
                     }
                    }).then(async (res)=>{
                        const json = await res.json();
                        alert("todo added");
                    })
            console.log(response);
             
            }} >Create</button>
        </div>
    )
};

export default Createtodo;