import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./errorModal.module.css";
import ReactDOM from "react-dom"
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>
          <div className={style.backdrop} onClick={props.onConfirm}></div>
          <Card style={style.modal}>
            <header className={style.header}>
              <h1>{props.title}</h1>
            </header>
            <div className={style.content}>{props.message}</div>
            <footer className={style.actions}>
              <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
          </Card>
        </>,document.getElementById('modal')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
