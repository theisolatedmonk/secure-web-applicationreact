import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">

      
//     </main>
//   )
// }
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import Encryption from './Encryption';
import PasswordAnalyser from './PasswordAnalyser';
import PasswordGenerator from './PasswordGenerator';

export default function Home() {
  

  return (
    <div className="flex flex-col items-center min-h-screen py-2 text-black bg-green-300">
      <Encryption/>
      <PasswordAnalyser/>
      <PasswordGenerator/>
    </div>
  );
}
