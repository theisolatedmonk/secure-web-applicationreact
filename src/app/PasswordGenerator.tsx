'use client'
import React from 'react'

import { useState } from 'react';

export default function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let characters = '';
    let password = '';

    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Password Generator</h1>
      <div className="mb-4">
        <label htmlFor="password-length" className="font-bold mb-2">
          Password Length:
        </label>
        <input
          type="number"
          id="password-length"
          className="border border-gray-300 rounded p-2"
          value={passwordLength}
          min={6}
          max={32}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="font-bold mb-2">Include:</label>
        <div className="flex gap-2">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Uppercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Lowercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Symbols
          </label>
        </div>
      </div>
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded focus:bg-gray-800"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
      {generatedPassword && (
        <div className=" border-gray-300 rounded p-2">
          <label htmlFor="generated-password" className="font-bold mb-2">
            Generated Password:
          </label>
          <input
            type="text"
            id="generated-password"
            className="border border-gray-300 rounded p-2"
            value={generatedPassword}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
