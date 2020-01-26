import React, { useState, useContext } from 'react';
import {
  Button,
  TextField,
  Card,
  Theme,
  withStyles,
  StyledComponentProps,
  Typography,
  Box
} from '@material-ui/core';
import { AuthContext } from '../../contexts/Auth';

const styles = (theme: Theme) => ({
  error: {
    color: theme.palette.error.main
  },
  input: {
    width: '100%'
  },
  card: {
    padding: theme.spacing(6),
    width: theme.spacing(60)
  },
  paddingBottom: {
    paddingBottom: theme.spacing(3)
  }
});

const LoginFormComponent = ({ classes }: StyledComponentProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const { login } = useContext(AuthContext);

  return (
    <Card className={classes!.card}>
      <Typography variant="h4" className={classes!.paddingBottom}>
        Войти
      </Typography>
      <Box className={classes!.paddingBottom}>
        <TextField
          className={classes!.input}
          label="Email"
          type="email"
          name="email"
          onInput={(e: any) => setEmail(e.target.value)}
        />
      </Box>
      <Box className={classes!.paddingBottom}>
        <TextField
          className={classes!.input}
          label="Пароль"
          type="password"
          name="password"
          onInput={(e: any) => setPassword(e.target.value)}
        />
      </Box>
      {error && <div className={classes!.error}>Неверный пароль</div>}
      <Box textAlign="right">
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => login(email, password) || setError(true)}
        >
          Войти
        </Button>
      </Box>
    </Card>
  );
};

export const LoginForm = withStyles(styles)(LoginFormComponent);
