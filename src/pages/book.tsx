import { NavBar } from "../components/navbar"
import { Card } from "../components/card"
import { Stack, Alert, Snackbar, Badge } from "@mui/material"
import { useState, useEffect } from "react"
import { BookingMenu } from "../components/bookingMenu"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";


export const BookPage = () => {

    const [bookingMenu, setBookingMenu] = useState(false);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [dates, setDates] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState<number>(Number);
    const [id, setId] = useState<number>(Number);
    const [open, setOpen] = useState(false);
    const [openedAlerts, setOpenedAlerts] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        const title = document.title;
        if (title.includes('Book') === false) {
            document.title = 'PlanAway | Book';
        }
    }, []);

    // opened booking menu
    const handleData = (data: {name: string, room: string, dates: string, img: string, price: number}) => {
        setName(data.name)
        setRoom(data.room)
        setDates(data.dates)
        setImg(data.img)
        setPrice(data.price)
        setBookingMenu(true)
        setId(() => { return Math.floor(Date.now() + Math.random() * 32489751467832) })
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
        setId(() => { return Math.floor(Date.now() + Math.random() * 32489751467832) })
        dispatch(addToCart({id: id, name: name, room: room, dates: dates, price: price}));
        setOpen(true)
        setOpenedAlerts(openedAlerts + 1);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setTimeout(() => { setOpenedAlerts(0) }, 100)
    };

    return (
        <div className="bookPage">
            <NavBar />
            <Stack direction='row' spacing={2} className="bookPageStack">
                <div className="fixDivBookpage" style={{left: '30px'}} />
                <Card 
                id={1}
                img={"https://cdn.ceoworld.biz/wp-content/uploads/2020/06/Santorini.jpg"} 
                name={"Santorini, Greece"}
                description={{room:"Hotel room", dates:"15-18 Mar"}}
                onData={handleData}
                price={2200}
                />
                <Card
                id={2}
                img={'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/a6/82/49/presidential-suite-view.jpg'}
                name={'Florence, Italy'}
                description={{room: "Hotel room", dates:"1 - 3 Aug"}}
                onData={handleData}
                price={1500}
                />
                <Card
                id={3}
                img={'https://viatravelers.com/wp-content/uploads/2020/06/shangrila_res-3.jpg.webp'}
                name={'Paris, France'}
                description={{room: "Hotel room", dates:"30 Jul - 1 Aug"}}
                onData={handleData}
                price={1200}
                />
                <Card 
                id={4}
                img="https://a0.muscache.com/im/pictures/773a2e4a-09af-473b-b0fe-ef76290a139a.jpg?im_w=1440"
                name="Ohio, USA"
                description={{room: 'Chalet', dates:"29 Dec - 3 Gen"}}
                onData={handleData}
                price={1600}
                />
                <Card 
                id={5}
                img="https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=1440"
                name="Catalonia, Spain"
                description={{room: 'Apartment', dates:"10 - 12 Jul"}}
                onData={handleData}
                price={1800}
                />
                <Card 
                id={6}
                img="https://a0.muscache.com/im/pictures/3b5dac9c-a5f6-4d84-be3a-147e38f48423.jpg?im_w=1200"
                name="Saint Paul, Brazil"
                description={{room: 'Treehouse', dates:"23 - 29 Jun"}}
                onData={handleData}
                price={900}
                />
                <Card 
                id={7}
                img="https://a0.muscache.com/im/pictures/9a2a0ba1-0f27-41fa-8bfe-088a59708b2c.jpg?im_w=1200"
                name="Antalya, Turkey"
                description={{room: 'Cottage', dates:"31 Aug - 6 Sep"}}
                onData={handleData}
                price={1700}
                />
                <Card
                id={8}
                img="https://a0.muscache.com/im/pictures/7f4a09de-d915-46c0-ba3c-189b40edaef2.jpg?im_w=1440"
                name="Tokyo, Japan"
                description={{room: 'Hotel room', dates:"20 - 24 Nov"}}
                onData={handleData}
                price={1600}
                />
            </Stack>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Badge badgeContent={openedAlerts} color='error'>
                    <Alert variant="filled" severity="success" onClose={handleClose}>Item successfully added to cart.</Alert>
                </Badge>
            </Snackbar>
            {bookingMenu ? <BookingMenu name={name} room={room} dates={dates} price={price} img={img} reqToLeave={reqToLeave} addedToCart={addedToCart}/> : null}
        </div>
    )
}