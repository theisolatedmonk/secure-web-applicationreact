"use client"

import { useState } from 'react';
import Encryption from './Encryption';
import PasswordAnalyser from './PasswordAnalyser';
import PasswordGenerator from './PasswordGenerator';
import Question from './Question';

const AllApp = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleComponentChange = (componentName: string) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="flex flex-col gap-4 items-center min-h-screen min-w-screen py-2 justify-center text-black flex-wrap">
      <div className="flex gap-4">
        <button
          className={`p-2 rounded-lg hover:bg-white font-bold ${activeComponent === 'encryption' ? 'bg-white' : 'bg-yellow-400'}`}
          onClick={() => handleComponentChange('encryption')}
        >
          Data Encryption and Decryption
        </button>
        <button
          className={`p-2 rounded-lg hover:bg-white font-bold ${activeComponent === 'analyser' ? 'bg-white' : 'bg-yellow-400'}`}
          onClick={() => handleComponentChange('analyser')}
        >
          Password Analyzer
        </button>
        <button
          className={`p-2 rounded-lg hover:bg-white font-bold ${activeComponent === 'generator' ? 'bg-white' : 'bg-yellow-400'}`}
          onClick={() => handleComponentChange('generator')}
        >
          Password Generator
        </button>
        <button
          className={`p-2 rounded-lg hover:bg-white font-bold ${activeComponent === 'question' ? 'bg-white' : 'bg-yellow-400'}`}
          onClick={() => handleComponentChange('question')}
        >
          Question Answer
        </button>
      </div>
      {activeComponent === 'encryption' && <Encryption />}
      {activeComponent === 'analyser' && <PasswordAnalyser />}
      {activeComponent === 'generator' && <PasswordGenerator />}
      {activeComponent === 'question' && <Question/>}
    </div>
  );
};

export default AllApp;
