'use client';

import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import Link from 'next/link';
import { routeConstants } from '@/core/route.constants';
import { BookingButton } from '@/components/bookingButton';


export default function ReservasPage() {
    const { cart } = useCart();

    return (
        <div className="container">
            <nav className="nav">
                <div className="navContent">
                    <Link href={routeConstants.root} className="logo">
                        Renting Houses
                    </Link>
                    <span style={{ fontWeight: 700 }}>Reservas ({cart.length})</span>
                </div>
            </nav>

            <main className="main">
                <h1 className="text-3xl font-bold mb-8">Tus casas reservadas</h1>

                {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <p>No tienes ninguna reserva todavía.</p>
                        <Link href={routeConstants.root} className="btnPrimary" style={{ display: 'inline-block', width: 'auto', marginTop: '20px', padding: '10px 20px' }}>
                            Explorar casas
                        </Link>
                    </div>
                ) : (
                    <div className="grid">
                        {cart.map((house) => (
                            <div key={house.id} className="card">
                                <div className="imageWrapper">
                                    <Image 
                                        src={`http://localhost:3001${house.image}`} 
                                        alt={house.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        unoptimized 
                                    />
                                </div>
                                <div className="cardBody">
                                    <h2 className="houseTitle">{house.name}</h2>
                                    <p className="houseCity" style={{ marginBottom: '15px' }}>{house.city}, {house.country}</p>
                                    <BookingButton house={house} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}