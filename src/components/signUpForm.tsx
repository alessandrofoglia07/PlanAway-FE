import { Paper, Typography, Stack, TextField, Button, Link, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Axios from 'axios';

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

export const SignUpForm = () => {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [canSubmit, setCanSubmit] = useState(false);
  const [signupError, setSignupError] = useState(false);

  useEffect(() => {    
    if (inputs.username !== '' && inputs.email !== '' && inputs.password !== '') {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [inputs])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((initState) => ({
      ...initState, 
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.table(inputs);
    Axios.post('http://localhost:3002/signup', inputs)
    .then((res)=>{
      if (res.data.message === 'Email is already registered') {
        console.log('%cAxios: Email already exists', 'color: cyan');
        setSignupError(true);
      } else if (res.data.message === 'User created') {
        console.log('%cAxios: Account created', 'color: cyan');
      } else if (res.status === 500) {
        console.log('Server error');
      }
    })
  };

  const handleErrorAlertClose = () => {
    setSignupError(false);
  }

  return (
    <div>
      <Paper elevation={12} className='accessForms'>
        <Stack justifyContent='center' spacing={10}>
          <Typography color='white' fontSize={60} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '2vh' }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} alignItems='center'>
              <InputTextField
                name='username'
                value={inputs.username}
                variant='standard'
                label='Username'
                type='text'
                color='primary'
                size='medium'
                onChange={handleInputChange}
                InputProps={{ style: { color: 'white', fontSize: 30, height: '60px' } }}
                InputLabelProps={{ style: { color: 'white', fontSize: 30 } }}
                sx={{ width: '25vw' }} />
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
                InputLabelProps={{ style: { color: 'white', fontSize: 30 } }}
                sx={{ width: '25vw' }} />
              <InputTextField
                name='password'
                value={inputs.password}
                variant='standard'
                label='Password'
                type='password'
                color='primary'
                size='medium'
                onChange={handleInputChange}
                InputProps={{ style: { color: 'white', fontSize: 30, height: '60px' } }}
                InputLabelProps={{ style: { color: 'white', fontSize: 30 } }}
                sx={{ width: '25vw' }} />
              <Button
                type='submit'
                variant='text'
                sx={{ fontSize: '2rem', height: '80px', width: '160px', color: 'white', position: 'relative', top: '3vh' }}
                className='btnSubmit'
                disabled={!canSubmit}>
                Submit
              </Button>
            </Stack>
            <Stack alignItems='center'>
             <Link href='/login' sx={{ position: 'relative', top: '5vh', width: '250px', display: 'flex' }}>
                <Typography color='white' fontSize={20} sx={{ textAlign: 'center', pointerEvents: 'visible', width: '250px' }}>
                  Already have an account?
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
      <Snackbar open={signupError} autoHideDuration={2000} onClose={handleErrorAlertClose}>
        <Alert severity='error' variant='filled' onClose={handleErrorAlertClose}>Email already exists.</Alert>
      </Snackbar>
    </div>
  )
}
