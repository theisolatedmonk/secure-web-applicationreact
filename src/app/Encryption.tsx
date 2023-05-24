"use client"



import { useState } from 'react';
import CryptoJS from 'crypto-js';

export default function Encryption() {
  const [inputText, setInputText] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Data Encryption and Decryption</h1>
<div className="flex gap-6">
    <button className="bg-yellow-300 p-4 rounded-lg w-40 text-center font-bold">Encription</button>
    <button className="bg-yellow-300 p-4 rounded-lg w-40 text-center font-bold">Decription</button>
</div>
<div className="flex flex-col">
<div className="mb-4">
        <label htmlFor="input-text" className="font-bold mb-2">Enter text to encrypt:</label>
        <textarea
          id="input-text"
          className="border border-gray-300 rounded p-2"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
       
      </div>
      <div className="mb-4">
        <label htmlFor="key" className="font-bold mb-2">Enter Encryption key:</label>
        <input
          type="password"
          id="key"
          className="border border-gray-300 rounded p-2"
          value={encryptionKey}
          onChange={(e) => setEncryptionKey(e.target.value)}
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={encrypt}>Encrypt</button>
      </div>

      <div className="mb-4">
        <label htmlFor="encrypted-text" className="font-bold mb-2">Encrypted text:</label>
        <textarea
          id="encrypted-text"
          className="border border-gray-300 rounded p-2"
          value={encryptedText}
          onChange={(e) => setEncryptedText(e.target.value)}
        ></textarea>
      </div>
</div>




   <div className="flex flex-col">
   <div className="mb-4">

<div className="mb-4">
  <label htmlFor="encrypted-text" className="font-bold mb-2">Enter text to Decryption:</label>
  <textarea
    id="encrypted-text"
    className="border border-gray-300 rounded p-2"
    value={encryptedText}
    onChange={(e) => setEncryptedText(e.target.value)}
  ></textarea>
</div>
  <label htmlFor="key" className="font-bold mb-2">Enter decryption key:</label>
  <input
    type="password"
    id="key"
    className="border border-gray-300 rounded p-2"
    value={encryptionKey}
    onChange={(e) => setEncryptionKey(e.target.value)}
  />
  <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2" onClick={decrypt}>Decrypt</button>
</div>

<div>
  <label htmlFor="decrypted-text" className="font-bold mb-2">Decrypted text:</label>
  <textarea
    id="decrypted-text"
    className="border border-gray-300 rounded p-2"
    value={decryptedText}
    onChange={(e) => setDecryptedText(e.target.value)}
  ></textarea>
</div>
   </div>
    </div>
  );
}


