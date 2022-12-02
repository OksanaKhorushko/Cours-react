import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togleUserNameVisibility } from '../store/userSlice';

export const UserPage = () => {
  const { showUserName } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(togleUserNameVisibility())
  }

  return <div>
    <FormControlLabel control={<Checkbox checked={showUserName} onChange={handleChange} />} label="Show user name" />
  </div>;
};
