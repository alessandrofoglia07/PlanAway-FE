import { NavBar } from "../components/navbar"
import { Card } from "../components/card"
import { Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { BookingMenu } from "../components/bookingMenu"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import type { RootState } from "../redux/store";


export const BookPage = () => {

    const [bookingMenu, setBookingMenu] = useState(false);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [dates, setDates] = useState('');
    const [img, setImg] = useState('');
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    // opened booking menu
    const handleData = (data: {name: string, room: string, dates: string, img: string}) => {
        setName(data.name)
        setRoom(data.room)
        setDates(data.dates)
        setImg(data.img)
        setBookingMenu(true)
        console.log(data)
    };

    // close booking menu
    const reqToLeave = (reqToLeave : boolean) => {
        if (reqToLeave && setBookingMenu) {
            setBookingMenu(false)
        }
    };

    // adding to cart
    const addedToCart = () => {
        dispatch(addToCart({name: name, room: room, dates: dates}))
    }

    useEffect(() => {
        console.log(cart)
        console.log('cart changed')
    }, [cart])

    return (
        <div className="bookPage">
            <NavBar />
            <Stack direction='row' spacing={2} sx={{flexWrap: 'wrap'}}>
                <div style={{left: '30px'}} />
                <Card 
                id={1}
                img={"https://cdn.ceoworld.biz/wp-content/uploads/2020/06/Santorini.jpg"} 
                name={"Santorini, Greece"}
                description={{room:"Hotel room", dates:"15-30 Mar"}}
                onData={handleData}
                />
                <Card
                id={2}
                img={'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/a6/82/49/presidential-suite-view.jpg'}
                name={'Florence, Italy'}
                description={{room: "Hotel room", dates:"1 - 31 Aug"}}
                onData={handleData}
                />
                <Card
                id={3}
                img={'https://viatravelers.com/wp-content/uploads/2020/06/shangrila_res-3.jpg.webp'}
                name={'Paris, France'}
                description={{room: "Hotel room", dates:"23 Jul - 1 Aug"}}
                onData={handleData}
                />
                <Card 
                id={4}
                img="https://a0.muscache.com/im/pictures/773a2e4a-09af-473b-b0fe-ef76290a139a.jpg?im_w=1440"
                name="Ohio, USA"
                description={{room: 'Chalet', dates:"14 Dec - 26 Gen"}}
                onData={handleData}
                />
                <Card 
                id={5}
                img="https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=1440"
                name="Catalonia, Spain"
                description={{room: 'Apartment', dates:"3 May - 31 Jul"}}
                onData={handleData}
                />
                <Card 
                id={6}
                img="https://a0.muscache.com/im/pictures/3b5dac9c-a5f6-4d84-be3a-147e38f48423.jpg?im_w=1200"
                name="Saint Paul, Brazil"
                description={{room: 'Treehouse', dates:"3 - 29 Jun"}}
                onData={handleData}
                />
                <Card 
                id={7}
                img="https://a0.muscache.com/im/pictures/9a2a0ba1-0f27-41fa-8bfe-088a59708b2c.jpg?im_w=1200"
                name="Antalya, Turkey"
                description={{room: 'Cottage', dates:"5 Mar - 6 Sep"}}
                onData={handleData}
                />
                <Card
                id={8}
                img="https://a0.muscache.com/im/pictures/7f4a09de-d915-46c0-ba3c-189b40edaef2.jpg?im_w=1440"
                name="Tokyo, Japan"
                description={{room: 'Hotel room', dates:"9 - 24 Nov"}}
                onData={handleData}
                />
            </Stack>
            {bookingMenu ? <BookingMenu name={name} room={room} dates={dates} img={img} reqToLeave={reqToLeave} addedToCart={addedToCart}/> : null}
        </div>
    )
}