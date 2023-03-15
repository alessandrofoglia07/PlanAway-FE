import { AppBar, Toolbar, IconButton, Typography, Stack, createTheme, ThemeProvider, Button } from "@mui/material";
import CastleIcon from '@mui/icons-material/Castle';
import '../App.css'

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

    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(90deg, rgba(46,142,0,1) 0%, rgba(0,54,133,1) 90%);'}}>
            <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' href="/">
                        <CastleIcon fontSize='large' />
                    </IconButton>
                    <ThemeProvider theme={titleTheme}>
                        <Typography variant='h6' sx={{flexGrow: 1}}>
                            PlanAway.com
                        </Typography>
                    </ThemeProvider>
                    <Stack direction='row' spacing={4}>
                        <Button color='inherit' sx={{fontSize: 20}} href="/book">Book</Button>
                        <Button color='inherit' sx={{fontSize: 20}} href="/about">About</Button>
                        <Button color='inherit' sx={{fontSize: 20}} href="/login">Login</Button>
                    </Stack>
            </Toolbar>
        </AppBar>
    )
}
