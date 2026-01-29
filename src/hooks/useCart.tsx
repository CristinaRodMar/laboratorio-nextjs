'use client';

import React, { createContext, useContext, useState } from 'react';
import { House } from '../../api-server/src/mock-data';

interface CartContextType {
    cart: House[];
    toggleCart: (house: House) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<House[]>([]);

    const toggleCart = (house: House) => {
        setCart((prev) => 
        prev.some(item => item.id === house.id)
            ? prev.filter(item => item.id !== house.id)
            : [...prev, house]
        );
    };

    return (
        <CartContext.Provider value={{ cart, toggleCart }}>
        {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        return { cart: [], toggleCart: () => {} };
    }
    return context;
}