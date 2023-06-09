import { AppBar, Toolbar, IconButton, Typography, Stack, createTheme, ThemeProvider, Button, Badge } from '@mui/material';
import CastleIcon from '@mui/icons-material/Castle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAuthUser } from 'react-auth-kit';
import React from 'react';

const titleTheme = createTheme({
    typography: {
        fontFamily: ['Righteous', 'cursive'].join(','),
        fontSize: 20
    }
});

export const NavBar = () => {
    const auth = useAuthUser();
    const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity);

    const loginText = () => {
        if (auth()) {
            if (auth()?.username.length > 5) {
                return auth()?.username.substring(0, 5) + '...';
            } else {
                return auth()?.username;
            }
        } else {
            return 'Login';
        }
    };

    return (
        <div>
            <AppBar className='navbar' position='fixed' sx={{ background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);' }}>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' href='/'>
                        <CastleIcon fontSize='large' />
                    </IconButton>
                    <ThemeProvider theme={titleTheme}>
                        <Typography variant='h6' sx={{ flexGrow: 1, pointerEvents: 'none' }}>
                            PlanAway
                        </Typography>
                    </ThemeProvider>
                    <Stack direction='row' spacing={4}>
                        <Button color='inherit' sx={{ fontSize: 22, textTransform: 'none' }} href='/book'>
                            Book
                        </Button>
                        <Button color='inherit' sx={{ fontSize: 22, textTransform: 'none' }} href='/about'>
                            About
                        </Button>
                        <Button color='inherit' href='/login'>
                            <Typography sx={{ fontSize: 22, textTransform: 'none' }}>{loginText()}</Typography>
                        </Button>
                        <IconButton color='inherit' aria-label='cart' href='/cart'>
                            <Badge badgeContent={cartQuantity} color='info'>
                                <ShoppingCartIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <br />
            <br />
            <br />
        </div>
    );
};
