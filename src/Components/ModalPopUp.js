import React from "react";
import { Button, Box, Modal } from "@mui/material";
export default function ModalPopUp(props) {
  console.log(props.formState);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style }}>
        <h2 id="child-modal-title">Form Content</h2>
        <p>Title : {props.formState.title}</p>
        <p>Firstname : {props.formState.firstname}</p>
        <p>Lastname : {props.formState.lastname}</p>
        <p>Comment : {props.formState.comment}</p>
        <p>Selected Data : {JSON.stringify(props.todo[0])}</p>

        <Button onClick={props.handleClose}>Close Modal</Button>
      </Box>
    </Modal>
  );
}
