import {Button} from "@mui/material";
import {styles} from "./customize";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {DatePickerApp} from "../DatePickerApp";
import {months} from "../../helpers/months";
import {useDispatch, useSelector} from "react-redux";
import './Header.scss';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {actions as modalActions} from "../../features/modal";


export const Header = ({ prevMonth, nextMonth, today }) => {
  const visibleDate = useSelector(state => state.date);
  const dispatch = useDispatch();
  
  const openModal = () => {
    dispatch(modalActions.open());
  };
  
  return (
    <div className="header">
      <Button
        variant="contained"
        onClick={openModal}
        sx={{...styles.button, ...styles.eventButton}}
      >
        <AddOutlinedIcon fontSize='small' />
      </Button>
      <h3 className="header__date-title">
        {`${months[visibleDate.month]} ${visibleDate.year}`}
      </h3>
      <div className="header__nav">
        <DatePickerApp />
        <div className="header__nav-actions">
          <Button
            sx={{...styles.button}}
            variant="outlined"
            onClick={prevMonth}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            sx={styles.currentMonth}
            variant="outlined"
            onClick={today}
          >
            Today
          </Button>
          <Button
            sx={{...styles.button}}
            variant="outlined"
            onClick={nextMonth}
          >
            <ChevronRightIcon color="#000" />
          </Button>
        </div>
      </div>
    </div>
  );
}
