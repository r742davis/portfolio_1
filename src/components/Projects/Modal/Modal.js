import React from "react";
import "./Modal.css";

const linkCheck = ({ linkOne, linkTwo, nameOne, nameTwo }) => {
  if (nameOne !== "" && nameTwo !== "") {
    return (
      <>
        <a className="modal__button" href={linkOne}>
          {nameOne}
        </a>
        <a className="modal__button" href={linkTwo}>
          {nameTwo}
        </a>
      </>
    );
  } else {
    return (
      <a className="modal__button" href={linkOne}>
        {nameOne}
      </a>
    );
  }
};

const Modal = (props) => (
  <>
    <div className="modal">
      <div className="modal__grid">
        <div className="modal__close">
          <i onClick={props.closeModal} className="fas fa-times"></i>
        </div>
        <div className="modal__project-picture">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="modal__project-container">
          <h1 className="modal__project-title">{props.name}</h1>
          <p className="modal__project-description">{props.description}</p>
          <div className="modal__button-container">{linkCheck(props)}</div>
        </div>
      </div>
    </div>
  </>
);

export default Modal;
