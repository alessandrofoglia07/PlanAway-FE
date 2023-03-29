import { NavBar } from "../components/navbar"
import '../App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material";
import { useEffect } from "react";

export const AboutPage = () => { 

    useEffect(() => {
        const title = document.title;
        if (title.includes('About') === false) {
            document.title = 'PlanAway | About';
        }
    }, []);

    const customTheme = createTheme({
        typography: {
            fontFamily: [
                'Source Sans Pro',
                'sans-serif'
            ].join(','),
        }
    })

    return (
        <div className="aboutPage">
            <NavBar />
            <br/>
            <ThemeProvider theme={customTheme}>
                <Typography variant="h1" textAlign='center' className="aboutPageTitle">
                    <strong>Who we are</strong>
                </Typography>
            </ThemeProvider>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Typography variant="h4" textAlign='center' className="aboutPageText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.   
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4" textAlign='center' className="aboutPageText">
                Ratione eius perspiciatis blanditiis iste molestias quo!
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4" textAlign='center' className="aboutPageText">
                Aspernatur quam recusandae sapiente.
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4" textAlign='center' className="aboutPageText">
                Nesciunt id distinctio, fugit similique eveniet dignissimos debitis doloribus maiores hic?
            </Typography>
            <div className="custom-shape-divider-bottom-1679680709">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}
