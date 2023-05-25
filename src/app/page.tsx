import Image from 'next/image'


import { useState } from 'react';
import CryptoJS from 'crypto-js';
import Encryption from './Encryption';
import PasswordAnalyser from './PasswordAnalyser';
import PasswordGenerator from './PasswordGenerator';
import AllApp from './AllApp';
import Question from './Question';

export default function Home() {
  

  return (
    <div className="flex flex-col items-center min-h-screen py-2 text-black bg-green-300">
      <AllApp/>
      {/* <Question/> */}
    
    </div>
  );
}
