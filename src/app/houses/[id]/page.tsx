import { houses } from '../../../../api-server/src/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { routeConstants } from "@/core/route.constants";

export default async function HouseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; 
    
    const house = houses.find((h) => h.id === id); 

    if (!house) {
        return (
        <div className="main">
            <h1 className="text-2xl font-bold">Casa no encontrada</h1>
            <Link href={routeConstants.root} className="btnPrimary">Volver al inicio</Link>
        </div>
        );
    }


    return (
        <div className="container">
        <nav className="nav">
            <div className="navContent">
            <Link href={routeConstants.root} className="logo">Renting Houses</Link>
            <Link href={routeConstants.reservas} style={{color: 'var(--text-main)', fontWeight: 600}}>Reservas</Link>
            </div>
        </nav>

        <main className="main">
            <div className="detailHeader">
            <h1 className="detailTitle">{house.name}</h1>
            <p className="houseCity">{house.city}, {house.country}</p>
            </div>

            <div className="detailImageHero">
            <Image 
                src={`http://localhost:3001${house.image}`} 
                alt={house.name}
                fill
                className="object-cover"
                unoptimized 
            />
            </div>

            <div className="detailContentLayout">
            
            <section>
                <h2 className="houseTitle" style={{fontSize: '24px'}}>Sobre este alojamiento</h2>
                <p style={{lineHeight: '1.6', color: '#444', marginBottom: '30px'}}>
                {house.description}
                </p>
                
                <hr border-top="1px solid #eee" />

                <h3 style={{margin: '30px 0 20px'}}>Servicios y comodidades</h3>
                <ul className="amenitiesList">
                {house.amenities.map((item, index) => (
                    <li key={index} className="amenityTag">
                    {item}
                    </li>
                ))}
                </ul>
            </section>

            <aside>
                <div className="sidebarBooking">
                <div className="priceBig">
                    {house.price}€ <span style={{fontSize: '16px', fontWeight: 400, color: 'var(--text-light)'}}>/ noche</span>
                </div>
                
                <button className="btnPrimary" style={{width: '100%', cursor: 'pointer'}}>
                    Reservar
                </button>
                
                <div style={{marginTop: '15px', textAlign: 'center', fontSize: '13px', color: 'var(--text-light)'}}>
                    <p>Reserva garantizada</p>
                </div>
                </div>
            </aside>

            </div>
        </main>
        </div>
    );
}