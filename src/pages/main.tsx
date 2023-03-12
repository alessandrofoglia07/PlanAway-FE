import '../App.css'
import { useNavigate } from 'react-router-dom';
import background from '../data/img/background.jpg'
import { Typography, createTheme, ThemeProvider, Button } from '@mui/material';

export const MainPage = () => {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const navigate = useNavigate();

    const titleTheme = createTheme({
        typography: {
            fontFamily: [
                'Righteous',
                'cursive'
            ].join(','),
        },
    })

    const windowInnerWidth : number = document.documentElement.clientWidth;
    const windowInnerHeight : number = document.documentElement.clientHeight;

    return (
        <div>
            <div>
                <img src={background} alt='background' style={{width: '100%', height: windowInnerHeight, justifyContent: 'center', display: 'flex', zIndex: 0 }}></img>
                <div style={{position: 'absolute', top: '0px', right: '0px', color: 'black', backgroundColor: 'black', opacity: 0.5, width: windowInnerWidth, height: windowInnerHeight}} />
                <ThemeProvider theme={titleTheme}>
                    <Typography variant='h1' style={{color: 'white', fontSize: '8rem', position: 'absolute', top: '20%', right: '34%', textAlign: 'center'}}>
                        PlanAway
                    </Typography>
                </ThemeProvider>
                <Typography variant='h1' style={{color: 'white', fontSize: '2rem', position: 'absolute', top: '40%', right: '42%', textAlign: 'center'}}>
                    Plan your trip. Now.
                </Typography>
                <Button color='inherit' style={{position: 'absolute', top: '50%', right: '32%', color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}}>About</Button>
                <Button color='inherit' style={{position: 'absolute', top: '50%', right: '47%', color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}}>Book</Button>
                <Button color='inherit' style={{position: 'absolute', top: '50%', right: '62%', color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}}>Login</Button>
            </div>
        </div>
    )
}