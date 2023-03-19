import { AppBar, Toolbar, IconButton, Typography, Stack, createTheme, ThemeProvider, Button } from "@mui/material";
import CastleIcon from '@mui/icons-material/Castle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
        <div>
        <AppBar className="navbar" position="fixed" sx={{ background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);'}}>
            <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' href="/">
                        <CastleIcon fontSize='large' />
                    </IconButton>
                    <ThemeProvider theme={titleTheme}>
                        <Typography variant='h6' sx={{flexGrow: 1, pointerEvents: 'none'}}>
                            PlanAway
                        </Typography>
                    </ThemeProvider>
                    <Stack direction='row' spacing={4}>
                        <Button color='inherit' sx={{fontSize: 20}} href="/book">Book</Button>
                        <Button color='inherit' sx={{fontSize: 20}} href="/about">About</Button>
                        <Button color='inherit' sx={{fontSize: 20}} href="/login">Login</Button>
                        <IconButton color='inherit' aria-label='cart' href="/cart">
                            <ShoppingCartIcon fontSize='large' />
                        </IconButton>
                    </Stack>
            </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        </div>
    )
}
