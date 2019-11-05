import React, { useState } from "react";
import styles from "./Dialog.module.css";
import * as PropTypes from "prop-types";

const Dialog = ({
  open,
  closeCallback,
  closeButton = false,
  backDropClick = true
  }
) => {
  //const [open, setOpen] = useState(false);

  if (open) {
    return (
    <div className={styles.BackDrop}>
    <div className={styles.DialogContainer}></div>
    </div>
  )
  }
  else return null
};

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  callback: PropTypes.func,
  closeButton: PropTypes.bool,
  backDropClick: PropTypes.bool
};

export default Dialog;
