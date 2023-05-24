"use client"

// import React, { useState } from 'react'


// interface InputType{
//     inputText: any
// }
// let results = '';
// const [inputText, setInputText] = useState('');
// const analyze = () => {
   

//     if (inputText.length < 8) {
//       results += 'The password is too short (must be at least 8 characters long).\n';
//     }

//     if (!/[a-z]/.test(inputText)) {
//       results += 'The password must contain at least one lowercase letter.\n';
//     }

//     if (!/[A-Z]/.test(inputText)) {
//       results += 'The password must contain at least one uppercase letter.\n';
//     }

//     if (!/\d/.test(inputText)) {
//       results += 'The password must contain at least one digit.\n';
//     }

//     if (!/[\W_]/.test(inputText)) {
//       results += 'The password must contain at least one special character.\n';
//     }

//     if (results === '') {
//       results = 'The password is strong!';
//     }

//     alert(results);
//   };


// export default function PasswordAnalyser() {

//     let results = '';
// const [inputText, setInputText] = useState('');
// const analyze = () => {
   

//     if (inputText.length < 8) {
//       results += 'The password is too short (must be at least 8 characters long).\n';
//     }

//     if (!/[a-z]/.test(inputText)) {
//       results += 'The password must contain at least one lowercase letter.\n';
//     }

//     if (!/[A-Z]/.test(inputText)) {
//       results += 'The password must contain at least one uppercase letter.\n';
//     }

//     if (!/\d/.test(inputText)) {
//       results += 'The password must contain at least one digit.\n';
//     }

//     if (!/[\W_]/.test(inputText)) {
//       results += 'The password must contain at least one special character.\n';
//     }

//     if (results === '') {
//       results = 'The password is strong!';
//     }

//     alert(results);
//   };


//   return (
//     <><h1 className="text-4xl font-bold mb-6">Password Analyzer</h1><div className="mb-4">
//           <label htmlFor="password" className="font-bold mb-2">Password:</label>
//           <input
//               type="password"
//               id="password"
//               className="border border-gray-300 rounded p-2"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)} />
//       </div><div className="mb-4">
//               <button
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   onClick={analyze}
//               >
//                   Analyze
//               </button>
//           </div><div id="results"></div></>
//   )
// }

// import { useState } from 'react';

// export default function PasswordAnalyser() {
//   const [inputText, setInputText] = useState('');
//   const [results, setResults] = useState('');

//   const analyze = () => {
//     let analysisResults = '';

//     if (inputText.length < 8) {
//       analysisResults += 'The password is too short (must be at least 8 characters long).\n';
//     }

//     if (!/[a-z]/.test(inputText)) {
//       analysisResults += 'The password must contain at least one lowercase letter.\n';
//     }

//     if (!/[A-Z]/.test(inputText)) {
//       analysisResults += 'The password must contain at least one uppercase letter.\n';
//     }

//     if (!/\d/.test(inputText)) {
//       analysisResults += 'The password must contain at least one digit.\n';
//     }

//     if (!/[\W_]/.test(inputText)) {
//       analysisResults += 'The password must contain at least one special character.\n';
//     }

//     if (analysisResults === '') {
//       analysisResults = 'The password is strong!';
//     }

//     setResults(analysisResults);
//   };

//   return (
//     <>
//       <h1 className="text-4xl font-bold mb-6">Password Analyzer</h1>
//       <div className="mb-4">
//         <label htmlFor="password" className="font-bold mb-2">
//           Password:
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="border border-gray-300 rounded p-2"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={analyze}
//         >
//           Analyze
//         </button>
//       </div>
//       <div>
//         <label htmlFor="results" className="font-bold mb-2">
//           Results:
//         </label>
//         <textarea
//           id="results"
//           className="border border-gray-300 rounded p-2"
//           value={results}
//           readOnly
//         ></textarea>
//       </div>
//     </>
//   );
// }

import { useState } from 'react';

export default function PasswordAnalyser() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState('');

  const analyze = () => {
    let analysisResults = '';

    if (inputText.length < 8) {
      analysisResults += 'The password is too short (must be at least 8 characters long).\n';
    }

    if (!/[a-z]/.test(inputText)) {
      analysisResults += 'The password must contain at least one lowercase letter.\n';
    }

    if (!/[A-Z]/.test(inputText)) {
      analysisResults += 'The password must contain at least one uppercase letter.\n';
    }

    if (!/\d/.test(inputText)) {
      analysisResults += 'The password must contain at least one digit.\n';
    }

    if (!/[\W_]/.test(inputText)) {
      analysisResults += 'The password must contain at least one special character.\n';
    }

    if (analysisResults === '') {
      analysisResults = 'The password is strong!';
    }

    setResults(analysisResults);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Password Analyzer</h1>
      <div className="mb-4">
        <label htmlFor="password" className="font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded p-2"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={analyze}
        >
          Analyze
        </button>
      </div>
      <div>
        <label htmlFor="results" className="font-bold mb-2">
          Results:
        </label>
        {results && (
          <div className="border border-gray-300 rounded p-2">
            <pre>{results}</pre>
          </div>
        )}
      </div>
    </>
  );
}
