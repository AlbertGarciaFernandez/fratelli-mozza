import React from 'react';

export const PizzaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M50 10 L90 80 L10 80 Z" strokeLinejoin="round" />
    <circle cx="50" cy="40" r="4" fill="currentColor" />
    <circle cx="35" cy="65" r="4" fill="currentColor" />
    <circle cx="65" cy="60" r="4" fill="currentColor" />
    <path d="M25 80 Q50 90 75 80" />
  </svg>
);

export const TomatoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="50" cy="55" r="35" />
    <path d="M50 20 C40 10, 30 25, 50 40 C70 25, 60 10, 50 20 Z" fill="currentColor" />
  </svg>
);

export const WheatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M20 80 L80 20" />
    <path d="M80 20 C60 20, 50 30, 50 50 C50 30, 40 20, 20 20" />
    <path d="M70 30 C50 30, 40 40, 40 60 C40 40, 30 30, 10 30" />
    <path d="M60 40 C40 40, 30 50, 30 70 C30 50, 20 40, 0 40" />
  </svg>
);

export const WineGlassIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M30 20 L70 20" />
    <path d="M30 20 C30 50, 50 60, 50 60 C50 60, 70 50, 70 20" />
    <path d="M50 60 L50 90" />
    <path d="M35 90 L65 90" />
    <path d="M32 35 L68 35" strokeDasharray="2 4" />
  </svg>
);

export const LogoMascot = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" fill="none" stroke="currentColor" className={className}>
    <defs>
      {/* Arch paths for the circular text */}
      <path id="left-arch" d="M 45 195 A 100 100 0 0 1 45 45" />
      <path id="right-arch" d="M 195 45 A 100 100 0 0 1 195 195" />
      
      {/* Mask to punch out the internal details (eyes, mustache, buttons) from the solid silhouette */}
      <mask id="brothers-mask">
        <rect width="240" height="240" fill="white" />
        
        {/* Eyes */}
        <circle cx="102" cy="112" r="3" fill="black" />
        <circle cx="114" cy="112" r="3" fill="black" />
        <circle cx="126" cy="112" r="3" fill="black" />
        <circle cx="138" cy="112" r="3" fill="black" />
        
        {/* Mustaches */}
        <path d="M 98 122 Q 108 112, 118 122" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 122 122 Q 132 112, 142 122" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
        
        {/* Overalls bib outline */}
        <path d="M 95 138 L 95 158 L 145 158 L 145 138" stroke="black" strokeWidth="4" fill="none" strokeLinejoin="round" />
        
        {/* Central blobs (pizza ingredients on chest) */}
        <ellipse cx="120" cy="144" rx="10" ry="14" fill="black" />
        <circle cx="106" cy="174" r="7" fill="black" />
        <circle cx="134" cy="174" r="7" fill="black" />
        
        {/* Arm separation lines */}
        <path d="M 85 138 L 75 170" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 155 138 L 165 170" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Hand detail lines (fingers) */}
        <path d="M 45 105 L 55 105 M 48 98 L 55 102 M 52 92 L 58 98" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 195 105 L 185 105 M 192 98 L 185 102 M 188 92 L 182 98" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
      </mask>
    </defs>

    {/* Arched Text */}
    <text fontSize="20" fontWeight="900" fontFamily="Archivo Black, sans-serif" fill="currentColor" strokeWidth="0" letterSpacing="4">
      <textPath href="#left-arch" startOffset="50%" textAnchor="middle">CERDANYOLA</textPath>
    </text>
    <text fontSize="20" fontWeight="900" fontFamily="Archivo Black, sans-serif" fill="currentColor" strokeWidth="0" letterSpacing="4">
      <textPath href="#right-arch" startOffset="50%" textAnchor="middle">ITALIAN PIZZA</textPath>
    </text>

    {/* Spinning Pizza Dough (Infinity symbol) */}
    <path d="M 120 45 C 95 20, 65 55, 120 55 C 175 55, 145 20, 120 45 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    <path d="M 95 45 C 105 45, 115 41, 120 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

    {/* The Brothers Mascot */}
    <g mask="url(#brothers-mask)">
      {/* Heads */}
      <circle cx="108" cy="115" r="18" fill="currentColor" strokeWidth="0" />
      <circle cx="132" cy="115" r="18" fill="currentColor" strokeWidth="0" />
      
      {/* Hair (Left Head) */}
      <circle cx="94" cy="105" r="7" fill="currentColor" strokeWidth="0" />
      <circle cx="108" cy="99" r="8" fill="currentColor" strokeWidth="0" />
      <circle cx="122" cy="103" r="6" fill="currentColor" strokeWidth="0" />
      
      {/* Hair (Right Head) */}
      <circle cx="118" cy="103" r="6" fill="currentColor" strokeWidth="0" />
      <circle cx="132" cy="99" r="8" fill="currentColor" strokeWidth="0" />
      <circle cx="146" cy="105" r="7" fill="currentColor" strokeWidth="0" />
      
      {/* Torso & Legs */}
      <path d="M 85 130 L 75 175 L 55 175 L 55 210 L 95 210 L 95 175 L 145 175 L 145 210 L 185 210 L 185 175 L 165 175 L 155 130 Z" fill="currentColor" strokeWidth="0" />
      
      {/* Feet / Shoes */}
      <path d="M 95 195 L 30 195 L 30 210 L 95 210 Z" fill="currentColor" strokeWidth="0" />
      <path d="M 145 195 L 210 195 L 210 210 L 145 210 Z" fill="currentColor" strokeWidth="0" />
      
      {/* Left Arm & Hand */}
      <path d="M 85 140 L 45 140 L 45 105 L 58 105 L 58 128 L 85 128 Z" fill="currentColor" strokeWidth="0" />
      <circle cx="51.5" cy="105" r="11" fill="currentColor" strokeWidth="0" /> 
      
      {/* Right Arm & Hand */}
      <path d="M 155 140 L 195 140 L 195 105 L 182 105 L 182 128 L 155 128 Z" fill="currentColor" strokeWidth="0" />
      <circle cx="188.5" cy="105" r="11" fill="currentColor" strokeWidth="0" /> 
    </g>
  </svg>
);
