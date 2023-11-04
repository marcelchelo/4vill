import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    siteName: "158-E-126ST",
    address: "123 Main St",
    sqf: "50000",
    scope: "Install Drywall on 40ft Ceilings",
    image: "/158-E-126ST.jpg",
  },
  {
    siteName: "180E-88st",
    address: "404 Birch St",
    sqf: "70000",
    scope: "Flooring Replacement",
    image: "/180E-88st.jpg",
  },
  {
    siteName: "200-East-39th-Street",
    address: "505 Walnut St",
    sqf: "48000",
    scope: "Window Replacement",
    image: "/200-East-39th-Street.jpg",
  },
  {
    siteName: "Test Site 9",
    address: "606 Redwood St",
    sqf: "52000",
    scope: "Drywall installation",
    image: "/vercel.svg",
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24" style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
      <h2 className="text-3xl font-semibold mb-4">Project Sites</h2>
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
            <div className="text-lg text-black font-semibold">{site.siteName}</div>
            <div className="text-gray-600 text-lg mt-2">SQF: {site.sqf}</div>
            <div className="text-black mt-2">{site.scope}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
