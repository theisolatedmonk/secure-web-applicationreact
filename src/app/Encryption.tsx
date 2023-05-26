'use client'
import { useState } from 'react';
import CryptoJS from 'crypto-js';

export default function Encryption() {
  const [inputText, setInputText] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const encrypt = () => {
    if (inputText && encryptionKey) {
      const encrypted = CryptoJS.AES.encrypt(inputText, encryptionKey).toString();
      setEncryptedText(encrypted);
    }
  };

  const decrypt = () => {
    if (encryptedText && encryptionKey) {
      const bytes = CryptoJS.AES.decrypt(encryptedText, encryptionKey);
      const plaintext = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(plaintext);
    }
  };

  const handleModeClick = (mode: string) => {
    setSelectedMode(mode);
    setInputText('');
    setEncryptionKey('');
    setEncryptedText('');
    setDecryptedText('');
  };

  return (
    <div className="flex flex-col items-center justify-center text-center sm:w-[600px] p-2 gap-4">
      <h1 className="text-4xl font-bold mb-6">Data Encryption and Decryption</h1>
      <div className="flex gap-6">
        <button
          className={` p-4 rounded-lg w-40 text-center font-bold ${
            selectedMode === 'encryption' ? 'bg-green-500' : 'bg-yellow-300'
          }`}
          onClick={() => handleModeClick('encryption')}
        >
          Encryption
        </button>
        <button
          className={` p-4 rounded-lg w-40 text-center font-bold ${
            selectedMode === 'decryption' ? 'bg-green-500' : 'bg-yellow-300'
          }`}
          onClick={() => handleModeClick('decryption')}
        >
          Decryption
        </button>
      </div>

      {selectedMode === 'encryption' && (
        <div className="flex flex-col">
          <div className="flex flex-col w-full">
            <label htmlFor="input-text" className="font-bold w-full">
              Enter text to encrypt
            </label>
            <textarea
              id="input-text"
              className="border border-gray-300 rounded p-2 w-full"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="key" className="font-bold">
              Enter Encryption key:
            </label>
            <input
              type="password"
              id="key"
              className="border border-gray-300 rounded p-2"
              value={encryptionKey}
              onChange={(e) => setEncryptionKey(e.target.value)}
            />
            <button className="bg-blue-500 text-white rounded focus:bg-gray-800 my-4 p-2" onClick={encrypt}>
              Encrypt
            </button>
          </div>
          <div className="flex flex-col w-">
            <label htmlFor="encrypted-text" className="font-bold">
              Encrypted text:
            </label>
            <textarea
              id="encrypted-text"
              className="border border-gray-300 rounded p-2 w-full"
              value={encryptedText}
              onChange={(e) => setEncryptedText(e.target.value)}
            ></textarea>
          </div>
        </div>
      )}

      {selectedMode === 'decryption' && (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="encrypted-text" className="font-bold">
              Enter text to Decrypt:
            </label>
            <textarea
              id="encrypted-text"
              className="border border-gray-300 rounded p-2"
              value={encryptedText}
              onChange={(e) => setEncryptedText(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="key" className="font-bold">
              Enter decryption key:
            </label>
            <input
              type="password"
              id="key"
              className="border border-gray-300 rounded p-2 gap-2"
              value={encryptionKey}
              onChange={(e) => setEncryptionKey(e.target.value)}
            />
            <button className="bg-blue-500 text-white rounded p-2 my-4 focus:bg-gray-800" onClick={decrypt}>
              Decrypt
            </button>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="decrypted-text" className="font-bold">
              Decrypted text:
            </label>
            <textarea
              id="decrypted-text"
              className="border border-gray-300 rounded p-2"
              value={decryptedText}
              onChange={(e) => setDecryptedText(e.target.value)}
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
}

