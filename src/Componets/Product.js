import React, { useContext } from "react";
// import Link
import { Link } from "react-router-dom";
// import icons
import { BsEyeFill } from "react-icons/bs"
// 
import { MdAddShoppingCart } from "react-icons/md";
// import cart context
import { CartContext } from "../contexts/CartContext";
// main arrow function
const Product = ({ products }) => {
    // 
    const { addToCard } = useContext(CartContext);
    // destructure products
    const { id, image, category, title, price } = products
    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px]
            relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center
                items-center">
                    {/* image */}
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} alt={id} />
                    </div>
                </div>
                {/* Buttons */}
                <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2
                opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button onClick={() => addToCard(products, id)}>
                        <div className="flex justify-center items-center text-white bg-red-500 w-12 h-12">
                            <MdAddShoppingCart className="text-2xl" />
                        </div>
                    </button>
                    <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex
                    justify-center items-center text-primary drop-shadow-xl "><BsEyeFill /></Link>
                </div>
            </div>
            {/* category & title & price */}
            <div>
                <div className="text-sm capitalize text-gray-500">{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className="font-semibold mb-1">{title}</h2>
                </Link>
                <h2 className="font-semibold">${price}</h2>
            </div>
        </div>
    )
}

export default Product;