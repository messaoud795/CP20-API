import React from 'react';
import './App.css';
import UserList from './UserList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactCard from "./ContactCard";


function App() {
var users=UserList();
console.log(users);
  return (
    <div className="App">
{ users.map((user)=><div key={user.id}><ContactCard user={user}/></div>)}   
 </div>
  );
}

export default App;
