import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as eventActions } from "../../features/events";
import { actions as selectedActions } from "../../features/selected";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from "dayjs";
import _ from 'lodash';
import './EventForm.scss'

export const EventForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.selected);
  const [title, setTitle] = useState(selected.title || '');
  const [description, setDescription] = useState(selected.description || '');
  const [dateTime, setDateTime] = useState(dayjs(selected.dateTime) || dayjs())
  
  const isValid = useMemo(() => {
    if (!title) {
      return false;
    }
  
    if (!dateTime) {
      console.log('null')
      return false
    }
  
    if (!dateTime.isValid()) {
      console.log('not valid')
      return false;
    }
  
    return true;
  }, [title, dateTime]);
  
  const isSelected = useMemo(() => {
    return !_.isEmpty(selected);
  }, [selected])
  
  const clearForm = () => {
    setTitle('')
    setDescription('')
    setDateTime(dayjs())
  };
  
  const removeEvent = (eventId) => {
    dispatch(selectedActions.removeSelected());
    dispatch(eventActions.deleteEvent(eventId));
    closeModal();
  };
  
  const addEvent = () => {
    const newEvent = {
      id: selected.id || dayjs().valueOf(),
      title,
      description,
      dateTime: dateTime.valueOf(),
    };
    dispatch(eventActions.addEvent(newEvent));
    clearForm();
    closeModal();
  };
  
  const updateEvent = () => {
    const updatedEvent = {
      id: selected.id,
      title,
      description,
      dateTime: dateTime.valueOf(),
    };
    dispatch(eventActions.updateEvent(updatedEvent));
    clearForm();
    closeModal();
  };
  
  return (
    <form className="event-form">
      <Typography
        variant="h5"
        component="h2"
      >
        {isSelected ? 'Update event' : 'Create event'}
      </Typography>
      <TextField
        label="Title *"
        value={title}
        onChange={e => setTitle(e.target.value)}
        variant="standard"
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        variant="standard"
        fullWidth
        multiline
      />
      <div className="event-form__date-time-group">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
        >
          <DatePicker
            label="Date *"
            inputFormat="DD.MM.YYYY"
            value={dateTime}
            minDate={dayjs()}
            onChange={setDateTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={dateTime}
            onChange={setDateTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className="event-form__buttons">
        {isSelected && (
          <IconButton
            aria-label="delete"
            onClick={() => {removeEvent(selected.id)}}
          >
            <DeleteIcon />
          </IconButton>
        )}
        <Button
          variant="contained"
          disabled={!isValid}
          onClick={isSelected ? updateEvent : addEvent}
        >
          {isSelected ? 'Update' : 'Save'}
        </Button>
      </div>
    </form>
  );
};
