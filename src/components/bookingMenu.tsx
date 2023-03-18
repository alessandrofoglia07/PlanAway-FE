import React, { useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Box, Stack, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const BookingMenu = (props : {name: string, room: string, dates: string, img: string, reqToLeave: (arg: boolean) => void, addedToCart: (arg:boolean) => void}) => {

    useEffect(() => {
        const handleWheel = (e: Event) => {
            e.preventDefault(); // prevent scrolling
            e.stopPropagation(); // prevent scrolling on parent elements
        };

        document.body.addEventListener("wheel", handleWheel, { passive: false }); // add event listener to body

        return () => {
            document.body.removeEventListener("wheel", handleWheel); // remove event listener when component unmounts
        };
    }, []);

    const requestingToLeave = () => {
        props.reqToLeave(true)
    }

    const handleAddToCart = () => {
        props.addedToCart(true)
    }

    return (
        <div>
            <div className='bgShadowMainPage' onClick={()=>{requestingToLeave()}} />
            <Stack>
                <Box className='bookingMenu'>
                    <Card elevation={8} sx={{margin: 1, padding: 1}} className='card'>
                        <CardContent>
                            <CardMedia
                                component='img'
                                height='600'
                                image={props.img}
                            />
                            <br />
                            <Stack direction='row' justifyContent='space-between'>
                            <div>
                                <Typography variant='h6'>
                                    <strong>
                                        Book for {props.name}
                                    </strong>
                                </Typography>
                                <Typography variant='body1'>
                                    Type of room: {props.room}
                                </Typography>
                                <Typography variant='body1'>
                                    Available: {props.dates}
                                </Typography>
                            </div>
                                <Button 
                                    size='large' 
                                    className='bookingButton' 
                                    sx={{ color: 'white' }} 
                                    startIcon={<AddShoppingCartIcon fontSize='large' sx={{ color: 'white' }} />}
                                    onClick={handleAddToCart}>
                                    Add to cart
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </div>
    )
}