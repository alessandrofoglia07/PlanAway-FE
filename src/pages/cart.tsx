import {  TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Stack, Button, IconButton, Snackbar, Alert, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { NavBar } from "../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { clearCart, removeFromCart } from "../redux/slices/cartSlice";
import { useRef, useEffect, useState } from "react";
import Axios from "axios";
import { useAuthUser } from "react-auth-kit";

export const CartPage = () => {

    const tableRowRef = useRef<HTMLTableRowElement[]>([]);

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [notLoggedInError, setNotLoggedInError] = useState(false);
    const [successfulPurchase, setSuccessfulPurchase] = useState(false);
    const [emptyCartError, setEmptyCartError] = useState(false);
    const [notEnoughMoneyError, setNotEnoughMoneyError] = useState(false);
    const [unknownError, setUnknownError] = useState(false);
    const [balance, setBalance] = useState(0);
    const [width, setWidth] = useState<string>('70vw');

    const auth = useAuthUser();

    useEffect(()=>{
        setTotalPrice(
            function () {
                let price = 0;
                // eslint-disable-next-line array-callback-return
                cartItems.map((item) => {
                    price += item.price;
                })
                return price;
            }
        )
    }, [cartItems])


    useEffect(() => {
        const title = document.title;
        if (title.includes('Cart') === false) {
            document.title = 'PlanAway | Cart';
        }
        getBalance();
    });

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, []);

    const getBalance = () => {
        const user_id: number = auth()!.id;
        Axios.get('http://localhost:3002/getBalance', { params: { user_id: user_id } })
            .then((res) => {
                if (res.status === 201) {
                    setBalance(res.data.balance);
                } else if (res.status === 500) {
                    alert('Server error');
                    console.log('Server error');
                }
            })
    };

    const handleAlertClose = () => {
        setNotLoggedInError(false);
        setSuccessfulPurchase(false);
        setEmptyCartError(false);
        setNotEnoughMoneyError(false);
        setUnknownError(false);
    };

    const handleDeleteItem = (id: number, index: number) => {
            const tableRow = tableRowRef.current![index];
            if (tableRow) {
                tableRow.style.animation = "removeTableRow 0.5s";
                setTimeout(() => {
                    tableRow.style.animation = "";
                    dispatch(removeFromCart(id));
                }, 500);
            }
    };

    const clearCart1 = () => {
        const tableRows = tableRowRef.current;
        if (tableRows) {
            tableRows.forEach((tableRow, index) => {
                if (tableRow) {
                    tableRow.style.animation = "removeTableRow 0.5s";
                    setTimeout(() => {
                        tableRow.style.animation = "";
                        dispatch(clearCart());
                    }, 500);
                }
            })
        }
    };

    const handleConfirm = (e: any) => {
        e.preventDefault();
        let items : string[] = [];
        // eslint-disable-next-line array-callback-return
        cartItems.map((item) => {
            items.push(item.name);
        });
        if (auth() == null) {
            setNotLoggedInError(true);
            return;
        } else if (auth() != null && cartItems.length > 0 && balance >= totalPrice) {
            Axios.post('http://localhost:3002/purchases', {
                    user_id: auth()!.id,
                    cartItems: JSON.stringify(items),
                    price: totalPrice,
            });
            setSuccessfulPurchase(true);
            clearCart1();
        } else if (auth() != null && cartItems.length === 0 && balance >= totalPrice) {
            setEmptyCartError(true);
        } else if (auth() != null && cartItems.length > 0 && balance < totalPrice) {
            setNotEnoughMoneyError(true);
        } else {
            setUnknownError(true);
        }
    };

    const handleResize = () => {
        const w = window.innerWidth;
        if (w < 768) {
            setWidth('100vw')
        } else {
            setWidth('70vw')
        }
    }

    return (
        <div>
            <NavBar/>
            <Stack direction='row' sx={{flexWrap: 'wrap'}} className='cartPage' justifyContent='center'>
                <TableContainer className="scrollableTable" component={Paper} sx={{ height: 'calc(95vh - 120px)', width: {width} }}>
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
                            {cartItems.map((item, index) => (
                                <TableRow key={item.id} ref={(el) => {(tableRowRef.current![index] as HTMLTableRowElement | null) = el}}>
                                    <TableCell sx={{ fontSize: '20px' }}>{item.name}</TableCell>
                                    <TableCell sx={{ fontSize: '20px' }}>{item.dates}</TableCell>
                                    <TableCell sx={{ fontSize: '20px' }}><i>{item.room}</i></TableCell>
                                    <TableCell sx={{ fontSize: '20px' }}>${item.price}</TableCell>
                                    <TableCell>
                                        <IconButton 
                                            color='error'
                                            onClick={() => {handleDeleteItem(item.id, index)}}
                                            >
                                                <ShoppingCartCheckoutIcon fontSize="large" />
                                            </IconButton>
                                        </TableCell>
                             </TableRow>
                         ))}
                     </TableBody>
                    </Table>
                </TableContainer>
                        <Stack direction='row' justifyContent='space-around' sx={{position: 'absolute', bottom: '15px', width: '100vw'}}>
                            <Button 
                            variant="contained"    
                            color='success' 
                            size="large" 
                            sx={{ backgroundColor: '#5DBF9A', color: 'white', fontSize: '20px', minWidth: '100px'}}
                            onClick={handleConfirm}>
                                <Typography>
                                Confirm purchase of <br /> ${totalPrice}
                                </Typography>
                            </Button>
                            <Button 
                            variant="contained" 
                            color='success' 
                            size="large" 
                            sx={{ backgroundColor: '#91BE77', color: 'white', fontSize: '20px', minWidth: '100px' }}
                            href='/book'>
                                <Typography>
                                Continue booking
                                </Typography>
                            </Button>
                            <Button 
                            variant="contained" 
                            color='success' 
                            size="large" 
                            sx={{ backgroundColor: '#B9BD5C', color: 'white', fontSize: '20px', minWidth: '100px' }}
                            onClick={clearCart1}
                            endIcon={<RemoveShoppingCartIcon />}>
                                <Typography>
                                Clear cart
                                </Typography>
                            </Button>
                        </Stack>
            </Stack>
            <Snackbar open={notLoggedInError} onClose={handleAlertClose} autoHideDuration={3000}>
                <Alert onClose={handleAlertClose} severity="error" variant="filled">
                    Please log in to continue.
                </Alert>
            </Snackbar>
            <Snackbar open={emptyCartError} onClose={handleAlertClose} autoHideDuration={3000}>
                <Alert onClose={handleAlertClose} severity="error" variant="filled">
                    Please add items to your cart to continue.
                </Alert>
            </Snackbar>
            <Snackbar open={successfulPurchase} onClose={handleAlertClose} autoHideDuration={3000}>
                <Alert onClose={handleAlertClose} severity="success" variant="filled">
                    Thank you for your purchase! You will receive an email with your booking details shortly.
                </Alert>
            </Snackbar>
            <Snackbar open={notEnoughMoneyError} onClose={handleAlertClose} autoHideDuration={3000}>
                <Alert onClose={handleAlertClose} severity="error" variant="filled">
                    You do not have enough money to complete this purchase.
                </Alert>
            </Snackbar>
            <Snackbar open={unknownError} onClose={handleAlertClose} autoHideDuration={3000}>
                <Alert onClose={handleAlertClose} severity="error" variant="filled">
                    An unknown error has occurred.
                </Alert>
            </Snackbar>
        </div>
    );
};