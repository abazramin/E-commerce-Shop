import React, { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// import icons
import { FaCartPlus } from 'react-icons/fa6'
// import linl
import { Link } from "react-router-dom";
// import image
import Image from "../image/logo.png";
// 
const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    const { IsOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    // event  listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })
    return (
        <header className={`${isActive ? 'bg-white py-4  shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
            <dniv className="container mx-auto  flex  justify-between items-center
            h-full">
                <Link to={'/'}>
                    <div>
                        <img src={Image} className="w-12" alt="" />
                    </div>
                </Link>
                {/* Cart */}
                <div onClick={() => setIsOpen(!IsOpen)}
                    className="cursor-pointer   flex relative ">
                    < FaCartPlus className="text-2xl" />
                    <div className="bg-red-500 absolute
                -right-3 -top-3 text-[12px] w-[18px] h-[18px]
                text-white rounded-full flex justify-center items-center">
                        {itemAmount}
                    </div>
                </div>
            </dniv>
        </header>
    )
}

export default Header;