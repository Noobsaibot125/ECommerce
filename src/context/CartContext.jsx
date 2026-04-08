import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        // Mock initial state based on Figma design
        {
            id: 1,
            name: 'Apple iPhone 14 Pro Max 128 Go Deep Purple',
            price: 250000,
            image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=150&q=80',
            quantity: 1,
        },
        {
            id: 2,
            name: 'AirPods Max Argent Starlight Aluminium',
            price: 40000,
            image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=150&q=80',
            quantity: 1,
        },
        {
            id: 3,
            name: 'Apple Watch Series 9 GPS 41mm',
            price: 80000,
            image: 'https://images.unsplash.com/photo-1434493789847-2f02b3c22467?w=150&q=80',
            quantity: 1
        }
    ]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartTax = cartTotal * 0.18; // 18% generic tax
    const cartGrandTotal = cartTotal + cartTax;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartTotal, cartTax, cartGrandTotal }}>
            {children}
        </CartContext.Provider>
    );
};
