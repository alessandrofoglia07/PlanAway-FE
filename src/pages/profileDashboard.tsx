import { useAuthUser, useSignOut } from 'react-auth-kit';
import { NavBar } from '../components/navbar';
import PersonIcon from '@mui/icons-material/Person';
import { Paper, Typography, Stack, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ProfileDashboardPage = () => {

    const customTheme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
        },
    });

    const auth = useAuthUser();
    const signOut = useSignOut();

    const handleSignOut = () => {
        signOut();
    }

    return (
        <div>
            <NavBar />
            <Paper elevation={12} className='profileDashboard'>
                <Stack justifyContent='center' spacing={10}>
                    <PersonIcon sx={{ fontSize: 130, color: 'white', position: 'relative', top: '50px', alignSelf: 'center' }} />
                    <Typography color='white' fontSize={60} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '-10px' }}>
                       Hello {auth()!.username}
                    </Typography>
                    <Typography color='white' fontSize={30} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '-100px' }}>
                        <i>{auth()!.email}</i>
                    </Typography>
                    <Typography color='white' fontSize={50} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '-150px' }}>
                        Account Balance: <br /> <b>${auth()!.balance ? auth()!.balance : '0.00'}</b>
                    </Typography>
                    <ThemeProvider theme={customTheme}>
                        <Button 
                        variant='outlined' 
                        color='primary' 
                        style={{ position: 'relative', top: '-210px', borderWidth: '5px', width: '400px', alignSelf: 'center' }}
                        onClick={handleSignOut}>
                            <Typography color='white' fontSize={50} sx={{ fontFamily: 'Futura', textAlign: 'center', position: 'relative', top: '0px' }}>
                                Sign Out
                            </Typography>
                        </Button>
                    </ThemeProvider>
                </Stack>
            </Paper>
        </div>  
    )
}
