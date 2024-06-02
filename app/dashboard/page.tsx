"use client"; 

import Card from '@/components/card';
import { useRouter } from 'next/navigation';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const DashboardPage = () => {
  const router = useRouter();

  // Fungsi untuk menavigasi ke halaman presensi saat tombol ditekan
  const navigateToPresensiPage = () => {
    // console.log("Navigating to /absens");
    router.push('/absens'); 
  };

  const cardsData = [
    { title: "Total Absen", number: 30, change: 0 },
    { title: "Students Present", number: 10, change: 0 },
    { title: "Students Not Present", number: 0, change: 0 },
  ];

  return (
    <div className="relative p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cardsData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {/* Tombol Plus */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full fixed bottom-10 right-10 flex items-center justify-center"
        onClick={navigateToPresensiPage }
      >
        <AiOutlinePlusCircle size={24} />
      </button>
    </div>
    
    
  );
};

export default DashboardPage;
