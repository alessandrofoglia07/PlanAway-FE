import { NavBar } from "../components/navbar";
import { ChangeEvent, useEffect, useState } from "react";
import { Stack, Typography, Button, TextField, InputAdornment } from "@mui/material";
import Axios from 'axios';
import { useAuthUser } from "react-auth-kit";

// this is just a placeholder page for testing purposes
export const TransferMoneyPage = () => {

    const auth = useAuthUser();

    useEffect(() => {
        const title = document.title;
        if (title.includes('Transfer') === false) {
            document.title = 'PlanAway | Transfer Money';
        };
        getBalance();
    });
    
    const [amount, setAmount] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(()=>{
        if (isNaN(amount)) {
            setAmount(0);
        }
    }, [amount]);

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const input = e.target.value;
        const value = input.replace(/[^0-9]/g, '');
        setAmount(parseInt(value));
    };

    const handleAddMoney = () => {
        const user_id = auth()!.id;
        Axios.post('http://localhost:3002/addMoney', {amount: amount, user_id: user_id})
        .then((res)=>{
            if (res.status === 201) {
                alert('Money added successfully');
                console.log('Money added successfully');
                setAmount(0);
            } else if (res.status === 500) {
                alert('Server error');
                console.log('Server error');
                setAmount(0);
            }
        })
        .then(()=>{getBalance()})
    };

    const handleRemoveMoney = () => {
        const user_id = auth()!.id;
        Axios.post('http://localhost:3002/removeMoney', {amount: amount, user_id: user_id})
        .then((res)=>{
            if (res.status === 201) {
                alert('Money removed successfully');
                console.log('Money removed successfully');
                setAmount(0);
            } else if (res.status === 500) {
                alert('Server error');
                console.log('Server error');
                setAmount(0);
            }
        })
        .then(() => {getBalance()})
    };

    const getBalance = () => {
        const user_id : number = auth()!.id;
        Axios.get('http://localhost:3002/getBalance', {params: {user_id: user_id}})
        .then((res)=>{
            if (res.status === 201) {
                setBalance(res.data.balance);
            } else if (res.status === 500) {
                alert('Server error');
                console.log('Server error');
            }
        })
    };

    return (
        <div>
            <NavBar />
            <Stack sx={{position: "absolute", left: '10px'}}>
                <Typography variant='h3' sx={{ fontFamily: 'Futura', position: 'relative', top: '50px' }}>
                    Hello {auth()!.username}
                </Typography>
                <Typography variant='h3' sx={{ fontFamily: 'Futura', position: 'relative', top: '50px' }}>
                    Add Money to your account.
                </Typography>
                <TextField
                sx={{ position: 'relative', top: '100px', width: '300px', height: '100px' }}
                label="Amount"
                variant="filled"
                value={amount}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Typography sx={{ fontSize: 25}}>$</Typography></InputAdornment>,
                    style: { fontSize: 25 }
                }}
                InputLabelProps={{ style: { fontSize: 20 } }}
                onChange={handleAmountChange}
                />
                <Stack direction='row' spacing={2}>
                    <Button sx={{ position: 'relative', top: '150px', width: '300px', height: '100px', fontSize: 25 }} variant='contained' color='primary' onClick={handleAddMoney}>Add Money</Button>
                    <Button sx={{ position: 'relative', top: '150px', width: '300px', height: '100px', fontSize: 25 }} variant='contained' color='error' onClick={handleRemoveMoney}>Remove Money</Button>
                </Stack>
                <Typography variant='h3' sx={{ fontFamily: 'Futura', position: 'relative', top: '200px' }}>
                    Your Balance is: ${balance}
                </Typography>
            </Stack>
        </div>
    );
}