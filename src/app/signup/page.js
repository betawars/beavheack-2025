"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import validate from '../components/utilities/validate';
import { MenuItem } from '@mui/material';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props) {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    university: "",
    isDriver: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    validate(formData, setFormErrors)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData, setFormErrors)) {

      //send data to api
      closeModal();
    }
  };
  // const [emailError, setEmailError] = React.useState(false);
  // const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  // const [passwordError, setPasswordError] = React.useState(false);
  // const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  // const [nameError, setNameError] = React.useState(false);
  // const [nameErrorMessage, setNameErrorMessage] = React.useState('');

  // const validateInputs = () => {
  //   const email = document.getElementById('email');
  //   const password = document.getElementById('password');
  //   const name = document.getElementById('name');

  //   let isValid = true;

  //   if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
  //     setEmailError(true);
  //     setEmailErrorMessage('Please enter a valid email address.');
  //     isValid = false;
  //   } else {
  //     setEmailError(false);
  //     setEmailErrorMessage('');
  //   }

  //   if (!password.value || password.value.length < 6) {
  //     setPasswordError(true);
  //     setPasswordErrorMessage('Password must be at least 6 characters long.');
  //     isValid = false;
  //   } else {
  //     setPasswordError(false);
  //     setPasswordErrorMessage('');
  //   }

  //   if (!name.value || name.value.length < 1) {
  //     setNameError(true);
  //     setNameErrorMessage('Name is required.');
  //     isValid = false;
  //   } else {
  //     setNameError(false);
  //     setNameErrorMessage('');
  //   }

  //   return isValid;
  // };

  // const handleSubmit = (event) => {
  //   if (nameError || emailError || passwordError) {
  //     event.preventDefault();
  //     return;
  //   }
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     name: data.get('name'),
  //     lastName: data.get('lastName'),
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    //<AppTheme {...props}>
      // {/* <CssBaseline enableColorScheme /> */}
      <div>
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}
          >
            <FormLabel htmlFor="email" sx={{marginBottom:0}}>Email</FormLabel>
            <TextField
              autoComplete="email"
              name="email"
              type='email'
              required
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
            <FormLabel htmlFor="password" sx={{marginBottom:0}}>Password</FormLabel>
            <TextField
              autoComplete="password"
              name="password"
              type='password'
              required
              fullWidth
              value={formData.password}
              onChange={handleChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
            />
            <FormLabel htmlFor="firstName" sx={{marginBottom:0}}>First Name</FormLabel>
            <TextField
              autoComplete="firstName"
              name="firstName"
              type='text'
              required
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              error={!!formErrors.firstName}
              helperText={formErrors.firstName}
            />
            <FormLabel htmlFor="lastname" sx={{marginBottom:0}}>Last Name</FormLabel>
            <TextField
              autoComplete="lastname"
              name="lastName"
              type='text'
              required
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              error={!!formErrors.lastName}
              helperText={formErrors.lastName}
            />
            <FormLabel htmlFor="phoneNo" sx={{marginBottom:0}}>Number</FormLabel>
            <TextField
              autoComplete="phoneNo"
              type='phoneNo'
              name="phoneNo"
              required
              fullWidth
              value={formData.phoneNo}
              onChange={handleChange}
              error={!!formErrors.phoneNo}
              helperText={formErrors.phoneNo}
            />
            <FormLabel htmlFor="university" sx={{marginBottom:0}} >University</FormLabel>
            <TextField
              autoComplete="university"
              name="university"
              type='text'
              required
              fullWidth
              value={formData.university}
              onChange={handleChange}
              error={!!formErrors.university}
              helperText={formErrors.university}
            />
            <FormLabel htmlFor="isDriver" sx={{marginBottom:0}}>Are you a driver?</FormLabel>
            <TextField
              autoComplete="isDriver"
              name="isDriver"
              required
              fullWidth
              value={formData.isDriver}
              onChange={handleChange}
              error={!!formErrors.isDriver}
              helperText={formErrors.isDriver}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
            {/* <TextField
              margin="dense"
              label="First Name"
              type="text"
              name="firstName"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              error={!!formErrors.firstName}
              helperText={formErrors.firstName}
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              name="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
            />
            <TextField
              margin="dense"
              label="First Name"
              type="text"
              name="firstName"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              error={!!formErrors.firstName}
              helperText={formErrors.firstName}
            />
            <TextField
              margin="dense"
              label="Last Name"
              type="text"
              name="lastName"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              error={!!formErrors.lastName}
              helperText={formErrors.lastName}
            />
            <TextField
              margin="dense"
              label="Phone Number"
              type="number"
              name="phoneNo"
              fullWidth
              value={formData.phoneNo}
              onChange={handleChange}
              error={!!formErrors.phoneNo}
              helperText={formErrors.phoneNo}
            />
            <TextField
              margin="dense"
              label="University"
              type="text"
              name="university"
              fullWidth
              value={formData.university}
              onChange={handleChange}
              error={!!formErrors.university}
              helperText={formErrors.university}
            />
            <TextField
              margin="dense"
              select
              label="Are you a driver?"
              name="isDriver"
              fullWidth
              value={formData.isDriver}
              onChange={handleChange}
              error={!!formErrors.isDriver}
              helperText={formErrors.isDriver}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField> */}
            {/* <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="Jon Snow"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl> */}
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{marginTop:1.5}}
            >
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link
                href="signin"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
      </div>
    // </AppTheme>
  );
}