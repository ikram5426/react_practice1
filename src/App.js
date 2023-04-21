import React, { useState } from 'react';
import AddNewUser from './components/Users/AddNewUser';
import UserList from './components/Users/UserList';


function App() {
  const [userArray,setUserArray]=useState([])

  const arrayFetch=(name,age)=>{
    setUserArray(prevState=>([...prevState,{name:name,age:age}]))
  }

  return (
    <React.Fragment>
      <AddNewUser onClickHandle={arrayFetch} />
      <UserList users={userArray}/>
    </React.Fragment>
  );
}

export default App;
