import  { useState,useEffect } from 'react';
import axios from 'axios';


function UserList (){
    const[users,setUsers]=useState([]);
    const [error,setError]=useState(null)
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then (res=>setUsers ((res.data)))
     .catch(err=>setError(err))
    },[])
    
    return users;
}

export default UserList