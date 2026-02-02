
import React from 'react';

const FinancialIllustration: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
        {/* Background Decorative Shapes */}
        <circle cx="250" cy="250" r="200" fill="#F8FAFC" />
        <rect x="350" y="100" width="80" height="80" rx="20" transform="rotate(15 350 100)" fill="#E2E8F0" opacity="0.5" />
        <circle cx="100" cy="400" r="40" fill="#FEF3C7" opacity="0.6" />
        
        {/* Main Character Silhouette (Stylized) */}
        <path d="M250 380C310 380 340 340 340 280C340 220 310 180 250 180C190 180 160 220 160 280C160 340 190 380 250 380Z" fill="#1E293B" />
        <path d="M250 170C275 170 295 150 295 125C295 100 275 80 250 80C225 80 205 100 205 125C205 150 225 170 250 170Z" fill="#1E293B" />
        
        {/* Smartphone */}
        <rect x="290" y="220" width="50" height="90" rx="8" fill="#0F172A" />
        <rect x="295" y="225" width="40" height="80" rx="4" fill="#334155" />
        <rect x="300" y="240" width="30" height="4" rx="2" fill="#F59E0B" />
        <rect x="300" y="250" width="20" height="4" rx="2" fill="#94A3B8" />
        
        {/* Floating Financial Icons */}
        {/* Security Shield */}
        <g transform="translate(100, 150)">
          <path d="M20 0L40 10V25C40 40 30 50 20 55C10 50 0 40 0 25V10L20 0Z" fill="#F59E0B" />
          <path d="M12 25L18 31L28 21" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Agility/Speed (Clock) */}
        <g transform="translate(350, 320)">
          <circle cx="25" cy="25" r="25" fill="#1E1B4B" />
          <path d="M25 10V25L35 30" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Planning (Chart) */}
        <g transform="translate(380, 150)">
          <rect x="0" y="20" width="10" height="30" rx="2" fill="#94A3B8" />
          <rect x="15" y="10" width="10" height="40" rx="2" fill="#F59E0B" />
          <rect x="30" y="0" width="10" height="50" rx="2" fill="#1E293B" />
        </g>
        
        {/* Connecting Lines (Nodes) */}
        <path d="M140 180Q180 200 220 230" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M350 180Q320 200 310 220" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};

export default FinancialIllustration;
