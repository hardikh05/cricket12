import React from 'react';

const CricketBatIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      className="cricket-bat-icon"
    >
      {/* Bat Blade */}
      <path 
        d="M12.5 2 L3 19 L21 19 L12.5 2 Z" 
        fill="#f0c14b" 
        stroke="#6d4c41" 
        strokeWidth="1" 
      />

      {/* Blue and White Stripes */}
      <path d="M11 17 L3 17" stroke="#2979ff" strokeWidth="2" />
      <path d="M10 15.5 L3 15.5" stroke="white" strokeWidth="2" />
      <path d="M9 14 L3 14" stroke="#2979ff" strokeWidth="2" />

      {/* Bat Handle */}
      <rect
        x="11.5"
        y="19"
        width="2"
        height="6"
        fill="#b71c1c" 
        stroke="#6d4c41"
        strokeWidth="1"
        rx="1"
      />
    </svg>
  );
};

export default CricketBatIcon; 