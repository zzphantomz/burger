import React, { useMemo } from "react";
import classes from "./Modal.module.scss";
import AuxFile from "../../HOC/AuxFile";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) =>
  useMemo(
    () => (
      <AuxFile>
        <Backdrop modalClose={props.toggle} show={props.show} />
        <div
          className={classes.Modal}
          style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
          }}
        >
          {props.children}
        </div>
      </AuxFile>
    ),
    [props.show]
  );

export default Modal;
