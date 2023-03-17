import { NavBar } from "../components/navbar"
import '../App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material";

export const AboutPage = () => { 

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
                PlanAway is a travel planning website that allows users to plan their trips and share them with others.
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4" textAlign='center' className="aboutPageText">
                We are a team of 4 students from the University of Toronto, and we are currently in our 3rd year of Computer Science.
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4" textAlign='center' className="aboutPageText">
                We are passionate about travel and we hope that our website can help you plan your next trip!
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4" textAlign='center' className="aboutPageText">
                If you have any questions or concerns, please feel free to contact us
            </Typography>
        </div>
    )
}
