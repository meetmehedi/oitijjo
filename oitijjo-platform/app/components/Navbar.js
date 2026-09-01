'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" suppressHydrationWarning>
      <div className="container" suppressHydrationWarning>
        <Link href="/" className="nav-brand" suppressHydrationWarning>
          ঐতিজ্জ্বো <span>✦</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" suppressHydrationWarning>
          <li><Link href="/shop" suppressHydrationWarning>পণ্য দেখুন</Link></li>
          <li><Link href="/artisans" suppressHydrationWarning>কারিগর</Link></li>
          <li><Link href="/heritage" suppressHydrationWarning>ঐতিহ্য</Link></li>
          <li><Link href="/about" suppressHydrationWarning>আমাদের সম্পর্কে</Link></li>
          <li><Link href="/become-artisan" className="nav-cta" suppressHydrationWarning>কারিগর হিসেবে যোগ দিন</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="মেনু"
          suppressHydrationWarning
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--gold-light)',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
