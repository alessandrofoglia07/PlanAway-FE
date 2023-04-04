import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/navbar';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Axios from 'axios';

export const VerifyEmailPage = () => {
    const { token } = useParams();
    const [verificationResult, setVerificationResult] = useState<any>(null);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await Axios.get(`http://localhost:3002/verify/${token}`);
                if (response && response.data && response.data.message) {
                    setVerificationResult(response.data);
                } else {
                    throw new Error('Something went wrong');
                }
            }
            catch (error : any) {
                setVerificationResult({ message: error.message})
            }
        };

        verifyEmail();

    }, [token]);

    return (
        <div>
            <NavBar />
            {verificationResult ? (
                <Typography variant='h4' align='center' sx={{ mt: 5 }}>
                    {verificationResult.message}
                </Typography>
            ) : (
                <Typography variant='h4' align='center' sx={{ mt: 5 }}>
                    Verifying...
                </Typography>
            )}
        </div>
    )
}