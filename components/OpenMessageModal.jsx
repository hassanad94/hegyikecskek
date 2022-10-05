import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useStateContext } from "../context/settingContext";
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
  };

  const { openMessageModal, setOpenMessageModal } = useStateContext();
  const handleOpen = () => setOpenMessageModal(true);
  const handleClose = () => setOpenMessageModal(false);

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
        disableScrollLock={true}
      >
        <Box sx={style}>
          <ContactUs subject={"Érdekelnek az edzések"} subjectDisabled={true} />
        </Box>
      </Modal>
    </>
  );
};

export default OpenMessageModal;
