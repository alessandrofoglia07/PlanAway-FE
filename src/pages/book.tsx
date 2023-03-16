import { NavBar } from "../components/navbar"
import { Card } from "../components/card"
import { Stack } from "@mui/material"

export const BookPage = () => {
    return (
        <div className="bookPage">
            <NavBar />
            <Stack direction='row' spacing={4}>
                <Card 
                img={"https://cdn.ceoworld.biz/wp-content/uploads/2020/06/Santorini.jpg"} 
                name={"Santorini, Greece"}
                description={{room:"Hotel room", dates:"15-30 Mar"}}
                />
                <Card
                img={'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/a6/82/49/presidential-suite-view.jpg'}
                name={'Florence'}
                description={{room: "Hotel room", dates:"1-31 Aug"}}
                />
            </Stack>
        </div>
    )
}