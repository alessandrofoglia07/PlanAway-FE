import { useAuthUser, useSignOut } from 'react-auth-kit';
import { NavBar } from '../components/navbar';
import PersonIcon from '@mui/icons-material/Person';
import { Paper, Typography, Stack, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export const ProfileDashboardPage = () => {

    const customTheme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
        },
    });

    const [elevation, setElevation] = useState(12);
    const [balance, setBalance] = useState(0);
    const [smallerScreen, setSmallerScreen] = useState(false);

    useEffect(() => {
        const title = document.title;
        if (title.includes('Profile') === false) {
            document.title = 'PlanAway | Profile';
        }
    }, []);

    useEffect(()=>{
        const form = document.getElementById('paper');
        if (form) {
            form.addEventListener('mouseover', () => {
                setElevation(24);
            });
            form.addEventListener('mouseleave', () => {
                setElevation(12);
            });
        };
    }, []);

    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setSmallerScreen(true);
        } else {
            setSmallerScreen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, []);

    useEffect(()=>{
        getBalance();
    })

    const auth = useAuthUser();
    const signOut = useSignOut();
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
    };

    const handleAddMoney = () => {
        navigate('/transferMoney');
    };

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

    return (
        <div>
            <NavBar />
            <Paper elevation={elevation} className='profileDashboard' id='paper'>
                <Stack justifyContent='center' spacing={10}>
                    <PersonIcon sx={{ fontSize: 130, color: 'white', position: 'relative', top: '50px', alignSelf: 'center' }} />
                    <Typography color='white' fontSize={smallerScreen ? 40 : 60} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '-10px' }}>
                       Hello {auth()!.username}
                    </Typography>
                    <Typography color='white' fontSize={smallerScreen ? 20 : 30} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '-100px' }}>
                        <i>{auth()!.email}</i>
                    </Typography>
                    <Typography color='white' fontSize={smallerScreen ? 40 : 50} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '-150px' }}>
                        Account Balance: <br /> <b>${balance}</b>
                    </Typography>
                    <ThemeProvider theme={customTheme}>
                        <Stack direction='row' justifyContent='center' spacing={0} sx={{flexWrap: 'wrap'}}>
                        <Button 
                        variant='outlined' 
                        color='primary'
                        style={{ position: 'relative', top: '-210px', borderWidth: '5px', width: '400px', alignSelf: 'center', height: '100px' }}
                        onClick={handleSignOut}>
                            <Typography color='white' fontSize={40} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '0px' }}>
                                Sign Out
                            </Typography>
                        </Button>
                        <Button
                        variant='outlined'
                        color='primary'
                        style={{ position: 'relative', top: '-210px', borderWidth: '5px', width: '400px', alignSelf: 'center', height: '100px' }}
                        onClick={handleAddMoney}>
                            <Typography color='white' fontSize={38} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '0px' }}>
                                Transfer money
                            </Typography>
                        </Button>
                        </Stack>
                    </ThemeProvider>
                </Stack>
            </Paper>
        </div>  
    )
}
