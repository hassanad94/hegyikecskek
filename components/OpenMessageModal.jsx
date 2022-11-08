import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import ContactUs from "./ContactUs";

const OpenMessageModal = (...props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 360,
    bgcolor: "#141414",
    boxShadow: 0,
    padding: "24px",
    outline: 0,
    borderRadius: "8px",
    cursor: "auto",
    width: "100%",
    maxHeight: "85vh",
    overflow: "scroll",
  };

  const [openMessageModal, setOpenMessageModal] = useState(false);
  const handleOpen = () => {
    document.body.classList.toggle("modal-open", !openMessageModal);
    setOpenMessageModal(true);
  };
  const handleClose = () => {
    document.body.classList.toggle("modal-open", !openMessageModal);
    setOpenMessageModal(false);
  };

  const { buttonTitle } = props[0];

  return (
    <>
      <div onClick={handleOpen} className="button btn center">
        {buttonTitle}
      </div>

      <Modal
        className="modal-message"
        open={openMessageModal}
        onClose={handleClose}
        disableScrollLock
        // disablePortal={true} // a modal így a gyermek lesz nem külön elem
      >
        <Box sx={style}>
          <ContactUs subject={buttonTitle} subjectDisabled={true} />
        </Box>
      </Modal>
    </>
  );
};

export default OpenMessageModal;
