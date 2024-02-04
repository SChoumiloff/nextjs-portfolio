"use client"
import React from 'react';
import { useLanguage } from './LanguageContext';


const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();
  
    return (
      <div className="flex justify-center items-center space-x-2">
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
            language === 'EN' ? 'bg-gray-200 text-gray-800 focus:ring-gray-300' : 'bg-gradient-to-r from-primary-400 to-secondary-600'
          }`}
          onClick={() => {
            toggleLanguage('FR');
          }}
        >
          FR
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
            language === 'FR' ? 'bg-gray-200 text-gray-800 focus:ring-gray-300' : 'bg-gradient-to-r from-primary-400 to-secondary-600'
          }`}
          onClick={() => {
            toggleLanguage('EN');
          }}
        >
          EN
        </button>
      </div>
    );
  };

export default LanguageToggle;