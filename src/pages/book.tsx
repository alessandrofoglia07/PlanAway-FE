import { NavBar } from "../components/navbar"
import { Card } from "../components/card"
import { Stack } from "@mui/material"

export const BookPage = () => {
    return (
        <div className="bookPage">
            <NavBar />
            <Stack direction='row' spacing={2} sx={{flexWrap: 'wrap'}}>
                <div style={{left: '30px'}} />
                <Card 
                img={"https://cdn.ceoworld.biz/wp-content/uploads/2020/06/Santorini.jpg"} 
                name={"Santorini, Greece"}
                description={{room:"Hotel room", dates:"15-30 Mar"}}
                />
                <Card
                img={'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/a6/82/49/presidential-suite-view.jpg'}
                name={'Florence, Italy'}
                description={{room: "Hotel room", dates:"1 - 31 Aug"}}
                />
                <Card
                img={'https://viatravelers.com/wp-content/uploads/2020/06/shangrila_res-3.jpg.webp'}
                name={'Paris, France'}
                description={{room: "Hotel room", dates:"23 Jul - 1 Aug"}}
                />
                <Card 
                img="https://a0.muscache.com/im/pictures/773a2e4a-09af-473b-b0fe-ef76290a139a.jpg?im_w=1440"
                name="Ohio, USA"
                description={{room: 'Chalet', dates:"14 Dec - 26 Gen"}}
                />
                <Card 
                img="https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=1440"
                name="Catalonia, Spain"
                description={{room: 'Apartment', dates:"3 May - 31 Jul"}}
                />
                <Card 
                img="https://a0.muscache.com/im/pictures/3b5dac9c-a5f6-4d84-be3a-147e38f48423.jpg?im_w=1200"
                name="Saint Paul, Brazil"
                description={{room: 'Treehouse', dates:"3 - 29 Jun"}}
                />
                <Card 
                img="https://a0.muscache.com/im/pictures/9a2a0ba1-0f27-41fa-8bfe-088a59708b2c.jpg?im_w=1200"
                name="Antalya, Turkey"
                description={{room: 'Cottage', dates:"5 Mar - 6 Sep"}}
                />
                <Card
                img="https://a0.muscache.com/im/pictures/7f4a09de-d915-46c0-ba3c-189b40edaef2.jpg?im_w=1440"
                name="Tokyo, Japan"
                description={{room: 'Hotel room', dates:"9 - 24 Nov"}}
                />
            </Stack>
        </div>
    )
}