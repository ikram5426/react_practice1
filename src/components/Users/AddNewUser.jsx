import React, { useState } from "react";
import Card from "../UI/Card";
import style from "./addNewUser.module.css";
import btnStyle from "../UI/Button.module.css";
import Button from "../UI/Button";

const AddNewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    setEnteredAge("");
    setEnteredName("");
    console.log(enteredAge, enteredName);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  return (
    <Card style={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='userName'>User Name</label>
        <input type='text' id='userName' value={enteredName} onChange={nameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input type='text' id='age' value={enteredAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddNewUser;
