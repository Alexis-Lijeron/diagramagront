import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
   // const url = `https://diagrama-backend-jye6.onrender.com`;
    const url = 'http://localhost:3000'; 
    const { socket, online } = useSocket(url);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    )
}
