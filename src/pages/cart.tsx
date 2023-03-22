// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Stack, Grid, Button, IconButton } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar } from "../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { clearCart, removeFromCart } from "../redux/slices/cartSlice";

const customTheme = createTheme({
    typography: {
        fontFamily: [
            'Satisfy',
            'cursive'
        ].join(','),
    }
})

export const CartPage = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cart);

    const handleDeleteItem = (id: number) => {

        dispatch(removeFromCart(id));
    }

    return (
        <div>
            <NavBar/>
            <Stack direction='row' sx={{flexWrap: 'wrap'}} className='cartPage'>
                <TableContainer className="scrollableTable" component={Paper} sx={{ width:'50vw', height: '92vh'}}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: '25px' }}><b>Where?</b></TableCell>
                                <TableCell sx={{ fontSize: '25px' }}><b>When?</b></TableCell>
                                <TableCell sx={{ fontSize: '25px' }}><b>Room</b></TableCell>
                                <TableCell sx={{ fontSize: '25px' }}><b>Price</b></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell sx={{ fontSize: '20px' }}>{item.name}</TableCell>
                                    <TableCell sx={{ fontSize: '20px' }}>{item.dates}</TableCell>
                                    <TableCell sx={{ fontSize: '20px' }}><i>{item.room}</i></TableCell>
                                    <TableCell sx={{ fontSize: '20px' }}>${item.price}</TableCell>
                                    <TableCell>
                                        <IconButton 
                                            color='error'
                                            onClick={() => {handleDeleteItem(item.id)}}
                                            >
                                                <ShoppingCartCheckoutIcon fontSize="large" />
                                            </IconButton>
                                        </TableCell>
                             </TableRow>
                         ))}
                     </TableBody>
                    </Table>
                </TableContainer>
                <Grid container justifyContent='center' sx={{width: '40vw'}}>
                    <Stack direction='column' justifyContent='space-evenly'>
                        <ThemeProvider theme={customTheme}> 
                            <Typography variant="h1" className="cartPageCheckoutTypography" sx={{ color: '#74BF8B', textAlign: 'center'}}>
                                Satisfied?
                            </Typography>
                        </ThemeProvider>
                        <Stack direction='row' spacing={1.5}>
                            <Button 
                            variant="contained" 
                            color='success' 
                            size="large" 
                            sx={{ backgroundColor: '#5DBF9A', color: 'white', fontSize: '20px', width: '13vw' }}>
                                Confirm purchase
                            </Button>
                            <Button 
                            variant="contained" 
                            color='success' 
                            size="large" 
                            sx={{ backgroundColor: '#91BE77', color: 'white', fontSize: '20px', width: '13vw' }}
                            href='/book'>
                                Continue booking
                            </Button>
                            <Button 
                            variant="contained" 
                            color='success' 
                            size="large" 
                            sx={{ backgroundColor: '#B9BD5C', color: 'white', fontSize: '20px', width: '13vw' }}
                            onClick={()=>{dispatch(clearCart())}}
                            endIcon={<RemoveShoppingCartIcon />}
                            >
                                Clear cart
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Stack>
        </div>
    );
};