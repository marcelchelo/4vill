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
    scope: "High ceillings 20+ feet, perfromed drywall installation and level 5 taping.  ",
    image: "/180E-88st.jpg",
  },
  {
    siteName: "200-East-39th-Street",
    address: "505 Walnut St",
    sqf: "48,000",
    scope: "Insulation, Drywall, and Taping ",
    image: "/200-East-39th-Street.jpg",
  },
  {
    siteName: "Staten Island College",
    address: "60",
    sqf: "52,000",
    scope: "Remodelation of Various college campus buildings. Drywall pach work and finishing, painting, and carpentry work. ",
    image: "/vercel.svg",
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24" style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
      <h2 className="text-3xl font-semibold mb-4">Previous Projects</h2>
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
              />
            </div>
            <div className='flex justify-between'>
              <div className="text-lg text-black font-semibold">{site.siteName}</div>
              <div className="text-gray-600 text-lg ">SQF: {site.sqf}</div>
            </div>

            
            <div className="text-black mt-2">{site.scope}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
