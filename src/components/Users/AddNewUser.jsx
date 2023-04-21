import React, { useState } from "react";
import Card from "../UI/Card";
import style from "./addNewUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddNewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]=useState('')


  const addUserHandler = (e) => {
    e.preventDefault();
    if(enteredAge.trim().length<=1||enteredName.trim().length<=2){
      setError({
        title:'Name or age is invalid',
        message:"Please enter valid name (more then 2 alphabet) and age (more then 18)."
      })
    
      return
    }
    if(+enteredAge<18){
      setError({
        title:'Age is invalid',
        message:'Please enter valid age (more then 18).'
      })
     

      return
    }
    props.onClickHandle(enteredName,enteredAge)
    setEnteredAge("");
    setEnteredName("");
    
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  return (
    <React.Fragment>
     {error  && <ErrorModal title={error.title} message={error.message} onConfirm={()=>setError(null)} />}
      <Card style={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='userName'>User Name</label>
          <input
            type='text'
            id='userName'
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='text'
            id='age'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddNewUser;
