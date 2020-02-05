import React from 'react';
import { Nav } from '../Nav/Nav';
import { PageId } from '../../types';
import { Toolbar, AppBar, Grid } from '@material-ui/core';
// @ts-ignore
import { Logo } from 'loft-taxi-mui-theme';

export const Header = () => {
  return (
    <AppBar color="inherit" data-testid="header">
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Logo />
          <Nav />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
