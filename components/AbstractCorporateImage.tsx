
import React from 'react';

const AbstractCorporateImage: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1E293B', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="gradGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>

        {/* Base Shapes */}
        <rect width="500" height="500" rx="40" fill="white" />
        
        {/* Soft Background Gradients */}
        <circle cx="400" cy="100" r="150" fill="url(#gradGold)" opacity="0.1" filter="url(#blurFilter)" />
        <circle cx="100" cy="400" r="180" fill="#0F172A" opacity="0.05" filter="url(#blurFilter)" />

        {/* Dynamic Abstract Layers */}
        <path d="M500 150Q400 100 300 250T100 200V500H500V150Z" fill="url(#grad1)" opacity="0.03" />
        
        {/* Geometric Accents - Blue */}
        <path d="M150 100L450 400" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.2" />
        <path d="M100 150L400 450" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.1" />
        
        {/* Golden Professional Accents */}
        <rect x="380" y="80" width="40" height="40" rx="10" transform="rotate(15 380 80)" stroke="url(#gradGold)" strokeWidth="2" fill="white" fillOpacity="0.5" />
        <circle cx="120" cy="380" r="30" stroke="url(#gradGold)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        
        {/* Main Floating Elements - Modern Glassmorphism Style */}
        <g opacity="0.9">
          <rect x="180" y="160" width="220" height="140" rx="24" fill="url(#grad1)" />
          <rect x="195" y="175" width="60" height="10" rx="5" fill="url(#gradGold)" />
          <rect x="195" y="195" width="120" height="4" rx="2" fill="white" opacity="0.3" />
          <rect x="195" y="205" width="90" height="4" rx="2" fill="white" opacity="0.2" />
          
          {/* Accent Line */}
          <line x1="180" y1="300" x2="400" y2="300" stroke="url(#gradGold)" strokeWidth="4" strokeLinecap="round" />
        </g>
        
        <g opacity="0.8">
          <rect x="100" y="240" width="160" height="100" rx="20" fill="white" stroke="#E2E8F0" strokeWidth="1" />
          <circle cx="130" cy="275" r="15" fill="#F1F5F9" />
          <path d="M125 275L128 278L135 271" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="155" y="270" width="80" height="4" rx="2" fill="#94A3B8" />
          <rect x="155" y="280" width="50" height="4" rx="2" fill="#CBD5E1" />
        </g>

        {/* Connection Points */}
        <circle cx="420" cy="220" r="4" fill="#F59E0B" />
        <circle cx="440" cy="260" r="3" fill="#0F172A" opacity="0.3" />
        <circle cx="400" cy="340" r="5" fill="#F59E0B" />
      </svg>
    </div>
  );
};

export default AbstractCorporateImage;
