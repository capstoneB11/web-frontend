import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/png/logo-ayam2.png'

export default function Error() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 h-screen w-full bg-gray">
      <div className="grid justify-items-center">
        <img className="w-auto h-auto" src={Logo} alt="Logo"></img>

        <p className="text-center text-5xl font-bold p-2 text-black">Error 404</p>
        <p className="text-center text-3xl font-bold text-black/75">Halaman ini Tidak Ada 🥺 </p>

        <div className="px-5">
          <Link
            className="w-full my-5 py-2 bg-orange text-black font-bold rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40 p-2"
            to="/"
          >
            Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
}