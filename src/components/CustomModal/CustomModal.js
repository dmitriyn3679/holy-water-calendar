import './CustomModal.scss';
import {Box, Modal} from "@mui/material";
import './CustomModal.scss';
import {EventForm} from "../EventForm";
import {useDispatch, useSelector} from "react-redux";
import {actions as modalActions} from "../../features/modal";
import {actions as selectedActions} from "../../features/selected";

export const CustomModal = () => {
  const modalIsVisible = useSelector(state => state.modal);
  const dispatch = useDispatch();
  
  const closeModal = () => {
    dispatch(modalActions.close())
    dispatch(selectedActions.removeSelected())
  };
  
  return (
    <>
      <Modal
        open={modalIsVisible}
        onClose={closeModal}
      >
        <Box>
          <EventForm closeModal={closeModal} />
        </Box>
      </Modal>
    </>
  );
};
