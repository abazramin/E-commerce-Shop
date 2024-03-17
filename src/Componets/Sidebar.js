import React, { useContext } from "react";
// import Link
import { Link } from "react-router-dom";
// import icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
// import componets
import CartItem from '../Componets/CartItem'
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context 
import { CartContext } from "../contexts/CartContext";
// 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// 
const Sidebar = () => {
    // 

    const buyConform = () => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            icon: "info",
            title: "Oops...",
            text: "Coming Soon!",
        })
    }
    const { IsOpen, handleClose } = useContext(SidebarContext);
    const { itemAmount, cart, clearItemFromCard, total } = useContext(CartContext);
    return (
        <div className={` ${IsOpen ? 'right-0' : 'right-[-1060px]'} w-full  bg-white fixed top-0 h-full
        shadow-2xl md:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[30px]`}>
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm
                font-semibold">Shopping Bog({itemAmount})</div>
                {/* Icons */}
                <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            {/* Content */}
            <div className=" flex flex-col gap-y-2
            h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden
            border-b">
                {cart.map((item) => {
                    return (
                        <CartItem itemx={item} key={item.id} />
                    )
                })}
            </div>
            <div className=" flex flex-col gap-y-0 py-0 h-full
            mt-4">
                <div className="flex w-full justify-between items-center pb-2">
                    {/* Total */}
                    <div className="uppercase font-semibold">
                        <span>Total:</span>${total}
                    </div>
                    {/* Clear cart icon */}
                    <div onClick={() => clearItemFromCard()} className="cursor-pointer py-4 bg-red-500
                    text-white w-12 h-12 flex justify-center
                    items-center text-xl">
                        <FiTrash2 />
                    </div>
                </div>
                <div onClick={() => buyConform()}>
                    <Link to='/'
                        className='bg-primary flex p-2 justify-center items-center text-white w-full font-medium' >
                        Buy
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;