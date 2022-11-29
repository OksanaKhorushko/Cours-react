import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

export const MessageForm = (props) => {
  const [message, setMessage] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const onSendClick = () => {
    props.saveMessage(message);
    setMessage('');
    inputRef.current?.focus();
  }

  return (
    <Grid container spacing={2} mt="auto">
      <Grid item xs={8}>
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={4}
          value={message}
          onChange={onMessageChange}
          inputRef={inputRef}
          fullWidth
        />
      </Grid>
      <Grid item xs={4} alignSelf="flex-end">
        <Button variant="contained" disabled={!message} onClick={onSendClick} fullWidth>Send</Button>
      </Grid>
    </Grid>
  )
}
