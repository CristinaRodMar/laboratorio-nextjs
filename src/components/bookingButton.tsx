'use client';

import { useCart } from '@/hooks/useCart';
import { House } from '../../api-server/src/mock-data';

export function BookingButton({ house }: { house: House }) {
    const { cart, toggleCart } = useCart();
    const isSelected = cart.some(item => item.id === house.id);

    return (
        <button 
    onClick={() => toggleCart(house)}
    className="btnPrimary" 
    style={{ 
        width: '100%', 
        cursor: 'pointer',
        backgroundColor: isSelected ? '#e63946' : 'var(--primary)', 
        border: 'none',
        transition: 'background 0.3s ease'
    }}
>
    {isSelected ? 'Quitar reserva' : 'Reservar'}
</button>
    );
}