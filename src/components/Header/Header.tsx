import React from 'react';
import { Nav } from '../Nav/Nav';
import { PageId } from '../../types';
import { Toolbar, AppBar, Grid } from '@material-ui/core';
// @ts-ignore
import { Logo } from 'loft-taxi-mui-theme';

interface HeaderProps {
  onPageChange: (pageId: PageId) => void;
}

export const Header = ({ onPageChange }: HeaderProps) => {
  return (
    <AppBar color="inherit" data-testid="header">
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Logo />
          <Nav onPageChange={onPageChange} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
