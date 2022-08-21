import * as React from "react";
import "./Login.css";

import { Paper, Grid, FormControl, TextField, Button, FormHelperText } from '@mui/material';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="Login">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6} md={8}>
          <Paper variant="outlined" margin="normal" sx={{ mt: 3``, px: 3, py: 3 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField label="Email Address" margin="normal" fullWidth={true} variant="outlined" {...register("emailAddress", { required: true })} error={Boolean(errors.emailAddress)} />
              <TextField label="Password" margin="normal" fullWidth={true} variant="outlined" {...register("password", { required: true })} error={Boolean(errors.password)} />
              
              <Button type="submit" size="large" fullWidth={true} variant="contained">Login</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login