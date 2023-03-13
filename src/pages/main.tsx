import '../App.css'
import { useNavigate } from 'react-router-dom';
import background from '../data/img/background.jpg'
import { Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

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
        palette: {
            primary: {
                main: '#00000000'
            }
        }
    })
    
    const StyledAvatar = styled(Button)`
        ${({ theme }) => `
        position: absolute;
        top: 50%;
        right: 32%;
        transition: ${theme.transitions.create(['background-color', 'transform'], {
            duration: '0.8s',
        })};
        &:hover {
            transform: scale(1.3);
        }`
    }
    `;
    const StyledAvatar1 = styled(Button)`
        ${({ theme }) => `
        position: absolute;
        top: 50%;
        right: 47%;
        transition: ${theme.transitions.create(['background-color', 'transform'], {
            duration: '0.8s',
        })};
        &:hover {
            transform: scale(1.3);
        }`
    }
    `;
    const StyledAvatar2 = styled(Button)`
        ${({ theme }) => `
        position: absolute;
        top: 50%;
        right: 62%;
        transition: ${theme.transitions.create(['background-color', 'transform'], {
            duration: '0.8s',
        })};
        &:hover {
            transform: scale(1.3);
        }`
    }
    `;

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

                <ThemeProvider theme={titleTheme}>
                    <StyledAvatar>
                <Button style={{color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}} onClick={()=>{navigate('/about')}}>About</Button>
                    </StyledAvatar>
                </ThemeProvider>
                <ThemeProvider theme={titleTheme}><StyledAvatar1>
                    <Button style={{color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}} onClick={()=>{navigate('/book')}}>Book</Button>
                </StyledAvatar1></ThemeProvider>
                <ThemeProvider theme={titleTheme}><StyledAvatar2>
                    <Button style={{color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}} onClick={()=>{navigate('/login')}}>Login</Button>
                </StyledAvatar2></ThemeProvider>
                
            </div>
        </div>
    )
}

