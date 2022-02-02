import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cryptocurrencies } from "../pages/Cryptocurrencys/Cryptocurrencies";
import { NewsPG } from "../pages/NewsPG/NewsPG";
import { Crypto } from "../pages/Crypto/Crypto";

export const MenuRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home /> },
        {path: '/cryptocurrencies', element: <Cryptocurrencies /> },
        {path: '/news', element: <NewsPG /> },
        {path: '/crypto/:uuid', element: <Crypto /> }
    ])
}