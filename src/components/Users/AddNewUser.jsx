import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import style from "./addNewUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddNewUser = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (e) => {
    e.preventDefault();
    const userName = nameRef.current.value;
    const userAge = ageRef.current.value;
    if (userAge.trim().length <= 1 || userName.trim().length <= 2) {
      setError({
        title: "Name or age is invalid",
        message:
          "Please enter valid name (more then 2 alphabet) and age (more then 18).",
      });

      return;
    }
    if (+userAge < 18) {
      setError({
        title: "Age is invalid",
        message: "Please enter valid age (more then 18).",
      });

      return;
    }
    props.onClickHandle(userName, userAge);
    nameRef.current.value=''
    ageRef.current.value=''
    // setEnteredAge("");
    // setEnteredName("");
  };

  const ageChangeHandler = (e) => {
    // setEnteredAge(e.target.value);
  };

  const nameChangeHandler = (e) => {
    // setEnteredName(e.target.value);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card style={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='userName'>User Name</label>
          <input
            type='text'
            id='userName'
            // value={enteredName}
            ref={nameRef}
            // onChange={nameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='text'
            id='age'
            // value={enteredAge}
            ref={ageRef}
            // onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddNewUser;
