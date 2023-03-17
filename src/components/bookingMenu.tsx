import React, { useEffect } from 'react';
import { Typography, Card, CardContent, CardActions, CardMedia, Button, Box, Stack } from '@mui/material';

export const BookingMenu = (props : {name: string, room: string, dates: string, img: string, reqToLeave: any}) => {

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

    return (
        <div>
            <div className='bgShadowMainPage' onClick={()=>{requestingToLeave()}} />
            <Stack>
                <Box className='bookingMenu' width={900}>
                    <Card elevation={8} sx={{margin: 1, padding: 1}} className='card'>
                        <CardContent>
                            <CardMedia
                            component='img'
                            height='600'
                            image={props.img} 
                            />
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
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </div>
    )
}