import React, { useContext } from "react";
// improt link
import { Link } from "react-router-dom";
// import icon
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';
// import cart context
import { CartContext } from "../contexts/CartContext";
// 
const CartItem = ({ itemx }) => {
    const { reomveFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    // destructure item
    const { id, image, title, price, amount } = itemx;
    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b
        border-gray-200 w-full font-light text-gray-500 ">
            <div className="w-full min-h-[150px] flex  items-center
        gap-x-4">
                {/* Image Cart */}
                <Link to={`/product/${id}`}>
                    <img className="max-w-[80px]" src={image} alt={id} />
                </Link>
                <div className="w-full flex flex-col">
                    {/* Title and remove icons */}
                    <div className="flex justify-between mb-2">
                        <Link to={`/porduct/${id}`} className="text-sm
                        uppercase font-medium max-w-[240px] text-primary hover:underline">
                            {title}
                        </Link>
                        {/* Reomve Icon */}
                        <div onClick={() => reomveFromCart(id)} className="text-2xl cursor-pointer">
                            <IoMdClose className="text-gray-500 
                            hover:text-red-500 transition duration-300" />
                        </div>
                    </div>
                    <div className=" flex gap-x-2 h-[36px]
                text-sm">
                        {/* Quantity */}
                        <div className="flex flex-1 max-w-[100px]
                            items-center h-full border
                        text-primary font-medium">
                            {/* miuns icon */}
                            <div onClick={() => decreaseAmount(id)} className="flex-1 cursor-pointer h-full flex justify-center
                            items-center px-2">
                                <IoMdRemove />
                            </div>
                            {/* Amount */}
                            <div className="h-full flex justify-center 
                            items-center px-2">{amount}
                            </div>
                            <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center
                            items-center px-2 cursor-pointer">
                                <IoMdAdd />
                            </div>
                        </div>
                        {/* item price */}
                        <div className="flex-1 flex justify-around items-center
                        text-gray-400 font-medium">
                            ${price}
                        </div>
                        {/* final price */}
                        <div className="flex-1 flex justify-end items-center
                        text-primary font-medium">
                            {`$ ${parseFloat(price * amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;