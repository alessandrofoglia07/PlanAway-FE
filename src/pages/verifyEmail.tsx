import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/navbar';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';

export const VerifyEmailPage = () => {
    const { token } = useParams();
    const [verificationResult, setVerificationResult] = useState<any>(null);

    useEffect(() => {
        const title = document.title;
        if (title.includes('About') === false) {
            document.title = 'PlanAway | Verify Email';
        }
    }, []);

    const customTheme = createTheme({
        typography: {
            fontFamily: ['Source Sans Pro', 'sans-serif'].join(',')
        }
    });

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const res = await Axios.get(`http://localhost:3002/api/auth/verify/${token}`);
                console.log(res.data.message);
                if (res && res.data) {
                    setVerificationResult(res.data.message);
                    console.log(res.data.message);
                } else {
                    throw new Error('Something went wrong');
                }
            } catch (error: any) {
                setVerificationResult({ message: error.message });
            }
        };

        verifyEmail();
    }, [token]);

    return (
        <div>
            <NavBar />
            {verificationResult ? (
                <ThemeProvider theme={customTheme}>
                    <Typography variant='h1' align='center' sx={{ mt: 30 }} className='aboutPageTitle'>
                        <strong>{verificationResult}</strong>
                    </Typography>
                </ThemeProvider>
            ) : (
                <ThemeProvider theme={customTheme}>
                    <Typography variant='h1' align='center' sx={{ mt: 30 }} className='aboutPageTitle'>
                        <strong>Verifying...</strong>
                    </Typography>
                </ThemeProvider>
            )}
        </div>
    );
};
