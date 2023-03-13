import { AppBar, Toolbar, IconButton, Typography, Stack, createTheme, ThemeProvider, Button } from "@mui/material";
import CastleIcon from '@mui/icons-material/Castle';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const titleTheme = createTheme({
    typography: {
        fontFamily: [
            'Righteous',
            'cursive'
        ].join(','),
        fontSize: 20,
    },
})

export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=>{navigate('/')}}>
                        <CastleIcon fontSize='large' />
                    </IconButton>
                    <ThemeProvider theme={titleTheme}>
                        <Typography variant='h6' sx={{flexGrow: 1}}>
                            PlanAway.com
                        </Typography>
                    </ThemeProvider>
                    <Stack direction='row' spacing={4}>
                        <Button color='inherit' sx={{fontSize: 20}} onClick={()=>{navigate('/book')}}>Book</Button>
                        <Button color='inherit' sx={{fontSize: 20}} onClick={()=>{navigate('/about')}}>About</Button>
                        <Button color='inherit' sx={{fontSize: 20}} onClick={()=>{navigate('/login')}}>Login</Button>
                    </Stack>
            </Toolbar>
        </AppBar>
    )
}