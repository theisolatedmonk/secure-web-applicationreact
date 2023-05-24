"use client"

import Image from 'next/image'


import { SetStateAction, useState } from 'react';
import CryptoJS from 'crypto-js';
import Encryption from './Encryption';
import PasswordAnalyser from './PasswordAnalyser';
import PasswordGenerator from './PasswordGenerator';


export default function AllApp() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName );
  };

  return (
    <div className="flex flex-col gap-4 items-center min-h-screen min-w-screen py-2 justify-center text-black bg-green-300 flex-wrap">
      <div className="flex gap-4">
        <button
          className="bg-yellow-400 p-2 rounded-lg"
          onClick={() => handleComponentChange('encryption')}
        >
          Data Encryption and Decryption
        </button>
        <button
          className="bg-yellow-400 p-2 rounded-lg"
          onClick={() => handleComponentChange('analyser')}
        >
          Password Analyzer
        </button>
        <button
          className="bg-yellow-400 p-2 rounded-lg"
          onClick={() => handleComponentChange('generator')}
        >
          Password Generator
        </button>
      </div>
      {activeComponent === 'encryption' && <Encryption />}
      {activeComponent === 'analyser' && <PasswordAnalyser />}
      {activeComponent === 'generator' && <PasswordGenerator />}
    </div>
  );
}
