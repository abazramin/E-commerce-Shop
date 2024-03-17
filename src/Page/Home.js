import React, { useContext } from "react";
//  import product context
import { ProductContext } from '../contexts/ProductContext';
// import componets
import Product from "../Componets/Product";
import Hero from "../Componets/Hero";
// 

const Home = () => {
    // get products from product context
    const { products } = useContext(ProductContext);
    // console.log(products);
    // get only men's & women's clothing category
    const filterProduct = products.filter((item) => {
        return (
            item
        );
    });
    // 
    return (
        <div>
            <Hero />
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 xl:grid-col-5 gap-[30px] max-w-sm mx-auto
                    md:max-w-none md:mx-0">
                        {filterProduct.map((prod) => {
                            return <Product products={prod} key={prod.id} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;