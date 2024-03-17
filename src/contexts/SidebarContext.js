import React, { useState, createContext } from "react";
// import context
export const SidebarContext = createContext();
// 
const SidbarProvider = ({ children }) => {
    // sidebar state
    const [IsOpen, setIsOpen] = useState(false);
    // 
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <SidebarContext.Provider value={{ IsOpen, setIsOpen, handleClose }}>
            {children}
        </SidebarContext.Provider>
    );
};
export default SidbarProvider;