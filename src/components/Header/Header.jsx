import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = ({ pages }) => {
  return (
    <header className="header">
      <Paper
        elevation={0}
        sx={{
          p: 2,
        }}
      >
        <Grid container rowSpacing="5">
          {pages.map(({ name, to }) => (
            <Grid item xs={2} m={1} key={name}>
              <Button fullWidth variant="contained" component={NavLink} to={to}>
                {name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </header>
  );
};
