import { Paper, Typography, Stack, TextField, Button, Link, IconButton, Snackbar, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Axios from 'axios';
import { useSignIn } from 'react-auth-kit';

const InputTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'white',
  },
});

export const LoginForm = () => {

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [incorrectPwdError, setIncorrectPwdError] = useState(false);
  const [emailNotRegisteredError, setEmailNotRegisteredError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const signIn = useSignIn();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((initState) => ({
      ...initState,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.table(inputs);
    Axios.post('http://localhost:3002/login', inputs)
    .then((res) => {
      if (res.data.message === 'Login successful') {
        console.log('%cAxios: Login successful', 'color: cyan');
        signIn({
          token: res.data.token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: {
            email: res.data.email,
            username: res.data.username,
          }
        })

      } else if (res.data.message === 'Incorrect password') {
        console.log('%cAxios: Incorrect password', 'color: cyan');
        setIncorrectPwdError(true);
      } else if (res.data.message === 'Email is not registered') {
        console.log('%cAxios: Email is not registered', 'color: cyan');
        setEmailNotRegisteredError(true);
      } else if (res.status === 500) {
        console.log('%cAxios: Server error', 'color: cyan');
        setServerError(true);
      }
    })
  };

  const handleAlertClose = () => {
    setIncorrectPwdError(false);
    setEmailNotRegisteredError(false);
    setServerError(false);
  };

  return (
    <div>
      <Paper elevation={12} className='accessForms'>
        <Stack justifyContent='center' spacing={13}>
          <Typography color='white' fontSize={60} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '2vh' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={5} alignItems='center'>
              <InputTextField
                name='email'
                value={inputs.email}
                variant='standard'
                label='Email'
                type='email'
                color='primary'
                size='medium'
                onChange={handleInputChange}
                InputProps={{ style: { color: 'white', fontSize: 30, height: '60px' } }}
                InputLabelProps={{ style: { color: 'white', fontSize: 26 } }}
                sx={{ width: '25vw' }} />
              <InputTextField
                name='password'
                value={inputs.password}
                variant='standard'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                color='primary'
                size='medium'
                onChange={handleInputChange}
                InputProps={{ style: { color: 'white', fontSize: 30, height: '60px' }, endAdornment: <IconButton sx={{ color: 'white' }} onClick={() => { setShowPassword(!showPassword) }}> {showPassword ? <Visibility fontSize='large' /> : <VisibilityOff fontSize='large' />} </IconButton> }}
                InputLabelProps={{ style: { color: 'white', fontSize: 26 } }}
                sx={{ width: '25vw' }} />
              <Button
                type='submit'
                variant='text'
                sx={{ fontSize: '2rem', height: '80px', width: '160px', color: 'white', position: 'relative', top: '7vh' }}
                className='btnSubmit'>
                Submit
              </Button>
            </Stack>
            <Stack alignItems='center'>
              <Link href='/signup' sx={{ position: 'relative', top: '8vh', width: '230px' }}>
                 <Typography color='white' fontSize={20} sx={{ textAlign: 'center', pointerEvents: 'visible', width: '230px' }}>
                    Don't have an account?
                  </Typography>
              </Link>
            </Stack>
          </form>
        </Stack>
      </Paper>
      <div className="custom-shape-divider-bottom-1679680709">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <Snackbar open={incorrectPwdError} onClose={handleAlertClose} autoHideDuration={2000}>
        <Alert severity='error' variant='filled' onClose={handleAlertClose}>
          Incorrect password.
        </Alert>
      </Snackbar>
      <Snackbar open={emailNotRegisteredError} onClose={handleAlertClose} autoHideDuration={2000}>
        <Alert severity='error' variant='filled' onClose={handleAlertClose}>
          Email is not registered.
        </Alert>
      </Snackbar>
      <Snackbar open={serverError} onClose={handleAlertClose} autoHideDuration={2000}>
        <Alert severity='error' variant='filled' onClose={handleAlertClose}>
          Server error 500
        </Alert>
      </Snackbar>
    </div>
  )
}