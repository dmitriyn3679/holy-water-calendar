import './Event.scss';
import {useDispatch} from "react-redux";
import {actions as modalActions} from "../../features/modal";
import {actions as selectedActions} from "../../features/selected";

export const Event = ({event}) => {
  const dispatch = useDispatch();
  
  const openForm = () => {
    dispatch(modalActions.open());
  };
  
  const setEvent = (currentEvent) => {
    dispatch(selectedActions.setSelected(currentEvent));
  };
  
  return (
    <span
      className="event"
      onClick={() => {
        openForm();
        setEvent(event);
      }}
    >
      {event.title}
    </span>
  );
};
