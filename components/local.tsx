"use client";
import Head from 'next/head';

const Local = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-between items-center overflow-hidden">
      <Head>
        <title>Dashboard Presensi</title>
        <meta name="description" content="Dashboard Presensi dengan ucapan selamat datang dan card yang bisa bergerak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Selamat Datang, Ingat jangan lupa untuk semangat menggapai kesuksesan
        </h1>
      </main>

      <div className="mb-10">
        <button
          className="p-4 bg-yellow-500 text-black font-bold rounded-lg shadow-md animate-bounce"
          onClick={() => window.location.href = '/presensi'}
        >
          Presensi
        </button>
      </div>
    </div>
  );
};

export default Local;
