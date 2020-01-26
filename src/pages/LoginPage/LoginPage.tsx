import React from 'react';
import {
  Grid,
  Theme,
  StyledComponentProps,
  Container
} from '@material-ui/core';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { withStyles } from '@material-ui/styles';
// @ts-ignore
import { Logo } from 'loft-taxi-mui-theme';

const styles = (theme: Theme) => ({
  page: {
    background: 'url("/login-background.jpg")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '100vh'
  }
});

const LoginPageComponent = ({ classes }: StyledComponentProps) => {
  return (
    <div className={classes!.page}>
      <Container style={{ height: '100%' }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: '100%' }}
        >
          <Grid container xs={6} justify="center">
            <Logo white></Logo>
          </Grid>
          <Grid container xs={6} justify="center">
            <LoginForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export const LoginPage = withStyles(styles)(LoginPageComponent);
