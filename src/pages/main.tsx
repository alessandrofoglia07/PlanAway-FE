import { useEffect, useState } from 'react'
import '../App.css'
import background from '../data/img/background.jpg'
import { Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

export const MainPage = () => {

    const [spacing, setSpacing] = useState(-40);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 960) {
                setSpacing(-40);
            } else {
                setSpacing(10);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
        top: 49%;
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
        transition: ${theme.transitions.create(['background-color', 'transform'], {
            duration: '0.8s',
        })};
        &:hover {
            transform: scale(1.3);
        }`
    }
    `;

    return (
            <div>
                <img src={background} className='mainPageBG' alt='background'></img>
                <div className='bgShadowMainPage'/>
                <ThemeProvider theme={titleTheme}>
                    <Stack direction='row' justifyContent='center'>
                        <Typography variant='h1' className='textMainPage' sx={{color: 'white', fontSize: '8rem', position: 'absolute', top: '20%'}}>
                            PlanAway
                        </Typography>
                    </Stack>
                </ThemeProvider>
                <Stack direction='row' justifyContent='center'>
                    <Typography variant='h1' className='subtitleMainPage' style={{color: 'white', fontSize: '2rem', position: 'absolute', top: '40%'}}>
                        Plan your trip. Now.
                    </Typography>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='space-evenly' spacing={spacing}>
                    <ThemeProvider theme={titleTheme}>
                        <Stack alignItems='center'>
                            <StyledAvatar>
                                <Button className='buttonMainPage' sx={{color: '#fdbb2d', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}} href="/about">About</Button>
                            </StyledAvatar>
                        </Stack>
                        <Stack alignItems='center'>
                            <StyledAvatar1>
                                <Button className='buttonMainPage' sx={{color: 'white', fontFamily: ['Righteous','cursive'].join(','), fontSize: '45px'}} href="/book">Book</Button>
                            </StyledAvatar1>
                        </Stack>
                        <Stack alignItems='center'>
                            <StyledAvatar2>
                                <Button className='buttonMainPage' sx={{color: '#22c1c3', fontFamily: ['Righteous','cursive'].join(','), fontSize: '30px'}} href="/login">Login</Button>
                            </StyledAvatar2>
                        </Stack>
                    </ThemeProvider>
                </Stack>
            </div>
        )
}

