// this code refrence for any create new item
import React, { createContext, useEffect, useState } from "react";
// create context
export const CartContext = createContext()
// 
const CartProvider = ({ children }) => {
    // cart state
    const [cart, setCart] = useState([])
    // item amount
    const [itemAmount, setIsAmount] = useState(0)
    // total price
    const [total, setTotal] = useState(0);
    // 
    useEffect(() => {
        const total = cart.reduce((acc, curr) => {
            return acc + curr.price * curr.amount; 
        }, 0)
        setTotal(total.toFixed(2));
    })
    // update item amonut
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((acc, curr) => {
                return acc + curr.amount
            }, 0)
            setIsAmount(amount)
        }
    }, [cart])
    // add to Card
    const addToCard = (products, id) => {
        const newItem = { ...products, amount: 1 }
        // cheak if the item is already in the cart
        const cartItem = cart.find((item) => {
            return item.id === id;
        })
        // if cart item is already in the cart
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item
                }
            });
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }
    // reomve form cart
    const reomveFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart)
    }
    // clear all cart items
    const clearItemFromCard = () => {
        setCart([]);
    }
    // increase amount
    const increaseAmount = (id) => {
        const item = cart.find((item) => item.id === id)
        addToCard(item, id);
    }
    // deccreate amount
    const decreaseAmount = (id) => {
        const itemx = cart.find((item) => item.id === id);
        if (itemx) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, amount: itemx.amount - 1 }
                } else {
                    return item;
                };
            });
            setCart(newCart)
        }
        if (itemx.amount < 2) {
            reomveFromCart(id);
        }
        // Update the cart display or do any other necessary actions
    };
    return (
        <CartContext.Provider value={{
            cart, addToCard,
            reomveFromCart,
            clearItemFromCard,
            increaseAmount,
            decreaseAmount,
            itemAmount,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;
