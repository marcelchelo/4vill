import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    siteName: "158-E-126ST",
    address: "123 Main St",
    sqf: "150,000",
    scope: "Install insulation and  drywall. ",
    image: "/158-E-126ST.jpg",
  },
  {
    siteName: "180E-88st",
    address: "404 Birch St",
    sqf: "570,000",
    scope: "High ceillings, perfromed drywall installation and level 5 taping.  ",
    image: "/180E-88st.jpg",
  },
  {
    siteName: "200-East-39th-Street",
    address: "505 Walnut St",
    sqf: "248,000",
    scope: "Insulation, Drywall, and Taping ",
    image: "/200-East-39th-Street.jpg",
  },
  {
    siteName: "Staten Island College",
    sqf: "52,000",
    scope: "Remodelation of Various college campus buildings. Drywall pach work and finishing, painting, and carpentry work. ",
    image: "/cuny.jpg",
  },
  {
    siteName: "Knickerbocker Hotel",
    image: "/knickerbocker.jpg",
    sqf: "360,000",
    scope: "Complete renovation of all hotel suites including exterior framing and renovation of all public spaces."
  },
  {
    siteName: "Pier House and 1 Hotel",
    image: "/bkHotel.jpeg",
    sqf: "360,000",
    scope: "New construction of all interior drywall, carpentry & metal framing. 90 Furman St (North building) 10 floors, 87 units. 130 Furman St (South building) 4 floors, 22 units."
  },

];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24" style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
      <h2 className="text-3xl font-semibold mb-2">Previous Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardData.map((site, index) => (
          <div key={index} className="bg-gray-300 rounded-lg p-4 shadow-md">
            <div className="relative w-full rounded-lg overflow-hidden mb-4">
              <Image
                src={site.image}
                layout="responsive"
                width={500}
                height={500}
                alt={site.siteName}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center mt-4 gap-x-4'>
              <div className="text-md text-black font-semibold">{site.siteName}</div>
              <div className="text-gray-600 text-sm">SQF: {site.sqf}</div>
            </div>

            
            <div className="text-black mt-2 font-light">{site.scope}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
