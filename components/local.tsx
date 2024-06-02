"use client";
import Head from 'next/head';

const Local = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-between items-center overflow-hidden">
      <Head>
        <title>Dashboard Presensi</title>
        <meta name="description" content="Dashboard Presensi dengan ucapan selamat datang dan tombol presensi yang interaktif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col justify-center items-center text-center">
        <h5 className="text-4xl font-bold text-white mb-8">
          Selamat Datang! <br /> Jangan lupa untuk tetap semangat dan terus berusaha meraih kesuksesan.
        </h5>
      </main>

      <div className="mb-10">
        <button
          className="p-4 bg-yellow-500 text-black font-bold rounded-lg shadow-md animate-bounce"
          onClick={() => window.location.href = '/absens'}
        >
          Presensi Sekarang
        </button>
      </div>
    </div>
  );
};

export default Local;
