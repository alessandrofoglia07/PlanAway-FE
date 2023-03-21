// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Typography } from "@mui/material";
import { NavBar } from "../components/navbar";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const CartPage = () => {

    const cart = useSelector((state: RootState) => state.cart);

    return (
        <div>
            <NavBar/>
        </div>
    );
};