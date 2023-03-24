import { Paper, Typography, Stack, TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((initState) => ({
      ...initState, 
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.table(inputs);
  };

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
                className='btnSubmit'>
                Submit
              </Button>
            </Stack>
            <Link href='/login'>
              <Stack alignItems='center'>
              <Typography color='white' fontSize={20} sx={{ textAlign: 'center', position: 'relative', top: '5vh', pointerEvents: 'visible', width: '280px' }}>
                Already have an account?
              </Typography>
              </Stack>
            </Link>
          </form>
        </Stack>
      </Paper>
      <div className="custom-shape-divider-bottom-1679680709">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}
