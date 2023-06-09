import { useEffect } from 'react';
import { Typography, Link } from '@mui/material';
import { Stack } from '@mui/system';
import { NavBar } from '../components/navbar';

export const NotFoundPage = () => {

    useEffect(() => {
        const title = document.title;
        if (title.includes('404') === false) {
            document.title = 'PlanAway | 404';
        }
    }, []);

    const brs = [];
    for (let i = 0; i < 10; i++) {
        brs.push(<br />);
    }

    return (
        <div className="notFoundPage">
            <NavBar />
            {brs}
            <Typography variant='h1' textAlign='center' className='notFoundPageTitle'>
                <strong>Oh no! This page doesn't exist! :(</strong>
            </Typography>
            <br />
            <br />
            <Stack alignItems='center' justifyContent='center'>
                <Link variant='h2' href='/' underline='always' className='notFoundPageLink'><strong>Go back to PlanAway</strong></Link>
            </Stack>
        </div>
    )
}