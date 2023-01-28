import { useDispatch, useSelector } from 'react-redux';
import { EventForm } from '../EventForm';
import { actions as modalActions } from '../../features/modal';
import { actions as selectedActions } from "../../features/selected";
import { Box, Modal } from "@mui/material";
import './CustomModal.scss';

export const CustomModal = () => {
  const dispatch = useDispatch();
  const modalIsVisible = useSelector(state => state.modal);
  
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
