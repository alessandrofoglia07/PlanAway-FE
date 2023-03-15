import '../App.css'
import { useNavigate } from 'react-router-dom';
import background from '../data/img/background.jpg'
import { Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export const MainPage = () => {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const navigate = useNavigate();
    const classes = useStyles();

    const titleTheme = createTheme({
        typography: {
            fontFamily: [
                'Righteous',
                'cursive'
            ].join(','),
        },
        palette: {
            primary: {
                main: '#00000000'
            }
        }
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


                <Button className={classes.root} style={{color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}} href="/about">About</Button>

                <Button className={classes.root} style={{color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}} href="/book">Book</Button>


                <Button className={classes.root} style={{color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}} href="/login">Login</Button>

                
            </div>
        </div>
    )
}

