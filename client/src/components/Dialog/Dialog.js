import React, { useState } from "react";
import styles from "./Dialog.module.css";
import * as PropTypes from "prop-types";

const Dialog = (
  open,
  closeCallback,
  closeButton = "false",
  backDropClick = "true"
) => {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
    <div className='styles.BackDrop'>
    <div className="styles.DialogContainer"></div>
    </div>
  )
  }
};

Dialog.propTypes = {
  open: PropTypes.boolean.isRequired,
  callback: PropTypes.function,
  closeButton: propTypes.boolean,
  backDropClick: propTypes.boolean
};

export default Dialog;
