import { House } from '../../api-server/src/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { routeConstants } from '@/core/route.constants';

async function getHouses(): Promise<House[]> {
  const res = await fetch('http://localhost:3001/api/houses', {});
  if (!res.ok) throw new Error('Error al cargar casas');
  return res.json();
}

export default async function Page() {
  const houses = await getHouses();

 return (
    <div className="container">
      <nav className="nav">
        <div className="navContent">
          <Link href={routeConstants.root} className="logo" style={{ textDecoration: 'none' }}>
            Renting Houses
          </Link>
          
          <Link href={routeConstants.reservas} style={{fontWeight: 600, color: '#444'}}>
            Reservas
          </Link>
        </div>
      </nav>

      <main className="main">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Alojamientos Disponibles</h1>
        
        <div className="grid">
          {houses.map((house) => (
            <div key={house.id} className="card">
              <div className="imageWrapper">
                <Image 
                  src={`http://localhost:3001${house.image}`} 
                  alt={house.name}
                  fill
                  style={{objectFit: 'cover'}}
                  unoptimized 
                />
              </div>

              <div className="cardBody">
                <h2 className="houseTitle">{house.name}</h2>
                <p className="houseCity">{house.city}</p>
                
                <Link href={routeConstants.houseDetail(house.id)} className="btnPrimary">
                  Ver disponibilidad
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}