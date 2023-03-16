import { Card as MuiCard, Box, CardContent, CardMedia, Button, Typography, CardActions } from '@mui/material'

export const Card = (props: {img: string, name: string, description: {room: string, dates: string}}) => {

    return (
        <Box width='300px'>
            <MuiCard elevation={8} sx={{margin: 1, padding: 1}}>
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
                </CardContent>
                <CardActions>
                    <Button size='medium' sx={{margin: 'auto', color: 'blue'}} onClick={()=>{}}>Book now</Button>
                </CardActions>
            </MuiCard>
        </Box>
    )
}