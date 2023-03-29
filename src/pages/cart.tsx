import {  TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Stack, Button, IconButton } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { NavBar } from "../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { clearCart, removeFromCart } from "../redux/slices/cartSlice";
import { useRef, useEffect } from "react";

export const CartPage = () => {

    const tableRowRef = useRef<HTMLTableRowElement[]>([]);

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cart);

    useEffect(() => {
        const title = document.title;
        if (title.includes('Cart') === false) {
            document.title = 'PlanAway | Cart';
        }
    }, []);

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
    }

    return (
        <div>
            <NavBar/>
            <Stack direction='row' sx={{flexWrap: 'wrap'}} className='cartPage' justifyContent='center'>
                <TableContainer className="scrollableTable" component={Paper} sx={{height: 'calc(95vh - 120px)', width: '70vw'}}>
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
                            sx={{ backgroundColor: '#5DBF9A', color: 'white', fontSize: '20px', minWidth: '200px'}}>
                                Confirm purchase
                            </Button>
                            <Button 
                            variant="contained" 
                            color='success' 
                            size="large" 
                            sx={{ backgroundColor: '#91BE77', color: 'white', fontSize: '20px', minWidth: '200px' }}
                            href='/book'>
                                Continue booking
                            </Button>
                            <Button 
                            variant="contained" 
                            color='success' 
                            size="large" 
                            sx={{ backgroundColor: '#B9BD5C', color: 'white', fontSize: '20px', minWidth: '200px' }}
                            onClick={clearCart1}
                            endIcon={<RemoveShoppingCartIcon />}
                            >
                                Clear cart
                            </Button>
                        </Stack>
            </Stack>
        </div>
    );
};