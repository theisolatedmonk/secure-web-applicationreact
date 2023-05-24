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

export default function Home() {
  // const [inputText, setInputText] = useState('');
  // const [key, setKey] = useState('');
  // const [outputText, setOutputText] = useState('');

  // const encrypt = () => {
  //   const encrypted = CryptoJS.AES.encrypt(inputText, key).toString();
  //   setOutputText(encrypted);
  // };

  // const decrypt = () => {
  //   const decrypted = CryptoJS.AES.decrypt(outputText, key).toString(CryptoJS.enc.Utf8);
  //   setInputText(decrypted);
  // };

  // const analyze = () => {
  //   let results = '';

  //   if (inputText.length < 8) {
  //     results += 'The password is too short (must be at least 8 characters long).\n';
  //   }

  //   if (!/[a-z]/.test(inputText)) {
  //     results += 'The password must contain at least one lowercase letter.\n';
  //   }

  //   if (!/[A-Z]/.test(inputText)) {
  //     results += 'The password must contain at least one uppercase letter.\n';
  //   }

  //   if (!/\d/.test(inputText)) {
  //     results += 'The password must contain at least one digit.\n';
  //   }

  //   if (!/[\W_]/.test(inputText)) {
  //     results += 'The password must contain at least one special character.\n';
  //   }

  //   if (results === '') {
  //     results = 'The password is strong!';
  //   }

  //   alert(results);
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-black bg-green-300">
      <Encryption/>
      {/* <PasswordAnalyser/> */}
    </div>
  );
}
