'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { routeConstants } from "@/core/route.constants";

export function CartCounter() {
    const { cart } = useCart();

    return (
        <Link href={routeConstants.reservas} className="navReservas">
            Reservas
            {cart.length > 0 && (
                <span className="cartBadge">
                    {cart.length}
                </span>
            )}
        </Link>
    );
}