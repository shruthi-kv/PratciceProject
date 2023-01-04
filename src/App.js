import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
  const [userlist,updateuerlist] = useState([]);
  const userHandler = (uName,uAge) =>{
    updateuerlist((prevlist) =>{
      return [...prevlist,{name:uName,age:uAge, id:Math.random().toString()}]
    })

  }

  return (
    <div>
       
       <AddUser onAddUser={userHandler} />
       <UserList users={userlist}/>
    </div>
  );
}

export default App;
