'use client';

import { useCart } from '@/hooks/useCart';
import { House } from '../../api-server/src/mock-data';

export function BookingButton({ house }: { house: House }) {
    const { cart, toggleCart } = useCart();
    const isSelected = cart.some(item => item.id === house.id);

    return (
        <button 
            onClick={() => toggleCart(house)}
            className={`btnPrimary ${isSelected ? 'btnReserved' : ''}`}
        >
            {isSelected ? 'Quitar reserva' : 'Reservar'}
        </button>
    );
}