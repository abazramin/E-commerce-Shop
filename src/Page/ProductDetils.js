import React, { useContext } from "react";
// 
// import Header from "../Componets/Header";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";



const ProductDetils = () => {
    // fet the products if rom the url
    const { id } = useParams();
    const { products } = useContext(ProductContext)
    const { addToCard } = useContext(CartContext)

    // get the singe product based on the id
    const product = products.find(item => {
        return item.id === parseInt(id);
    })
    // cheak if product not found
    if (!product) {
        return (
            <section className="h-screen flex justify-center 
        items-center">
                Loading...
            </section>
        );
    }

    // destructer products
    const { title, price, description, image } = product;
    return (
        <>
            {/* <Header /> */}
            <section className="h-[1100px] pt-6 pb-12 lg:py-32 lg:pt-32 lg:h-[screen]
            flex items-center" >
                <div className="container mx-auto ">
                    {/* image & text wrapper */}
                    <div className="flex flex-col lg:flex-row">
                        {/* image */}
                        <div className="flex flex-1 justify-center
                        items-center mb-8 lg:mb-0">
                            <img className="max-w-[200px] lg:max-w-sm" src={image}
                                alt={id} />
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-[26px] font-medium
                            mb-2 max-w-[450px]  mx-auto lg:mx-0">{title}
                            </h1>
                            <div className="text-xl text-red-500 ">
                                ${price}
                            </div>
                            <p className="mb-8">{description}</p>
                            <button onClick={() => addToCard(product, product.id)} className="bg-primary py-4
                            px-8 text-white">Add To Cart</button>
                        </div>
                    </div>
                    {/* text */}
                </div>
            </section>
        </>
    )
}

export default ProductDetils;