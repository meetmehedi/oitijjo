'use client';
import { useState } from 'react';

export default function ProductImage({ src, alt, emoji = '🏺', style = {}, className = '' }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          background: 'linear-gradient(135deg, var(--parchment), var(--parchment-dark))',
          ...style
        }}
        className={className}
      >
        <span>{emoji}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'ঐতিহ্যবাহী পণ্য'}
      onError={() => setError(true)}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style
      }}
      className={className}
    />
  );
}
