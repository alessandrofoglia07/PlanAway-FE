import { Card as MuiCard, Box, CardContent, CardMedia, Button, Typography, CardActions } from '@mui/material'
import { useState } from 'react'

export const Card = (props: {id: number, img: string, name: string, description: {room: string, dates: string}, price: number, onData : any}) => {

    const [data] = useState({id: props.id, name: props.name, room: props.description.room, dates: props.description.dates, img: props.img, price: props.price})

    const sendBooking = () => {
        props.onData(data)
    }

    return (
        <div className='bookingCard'>
            <Box width='300px'>
                <MuiCard elevation={8} sx={{margin: 1, padding: 1}} className='card'>
                    <CardMedia
                    component='img'
                    height='250'
                    image={props.img} />
                    <CardContent>
                        <Typography variant='h6'>
                            <strong>
                                {props.name}
                            </strong>
                        </Typography>
                        <Typography variant='body1'>
                            {props.description.room}
                        </Typography>
                        <Typography variant='body1'>
                            {props.description.dates}
                        </Typography>
                        <Typography variant='body1'>
                            <b>$ {props.price}</b> night
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='medium' sx={{margin: 'auto', color: 'blue'}} onClick={()=>{sendBooking()}}>Book now</Button>
                    </CardActions>
                </MuiCard>
            </Box>
        </div>
    )
}