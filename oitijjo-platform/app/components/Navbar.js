'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" suppressHydrationWarning>
      <div className="container" suppressHydrationWarning>
        <Link href="/" className="nav-brand" suppressHydrationWarning onClick={() => setMenuOpen(false)}>
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

        {/* Mobile hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="মেনু টগল"
          suppressHydrationWarning
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--gold-light)',
            fontSize: '1.6rem',
            cursor: 'pointer',
            padding: '4px 8px',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div 
          className="mobile-nav-drawer"
          suppressHydrationWarning
          style={{
            background: 'linear-gradient(180deg, var(--ink) 0%, #20120a 100%)',
            borderBottom: '2px solid var(--gold-dark)',
            padding: '20px 24px 28px',
            animation: 'slideDown 0.25s ease',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <li>
              <Link 
                href="/shop" 
                onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--cream)', fontSize: '1.05rem', textDecoration: 'none', display: 'block', padding: '8px 0', borderBottom: '1px solid rgba(201,168,76,0.12)' }}
              >
                🛍️ পণ্য দেখুন
              </Link>
            </li>
            <li>
              <Link 
                href="/artisans" 
                onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--cream)', fontSize: '1.05rem', textDecoration: 'none', display: 'block', padding: '8px 0', borderBottom: '1px solid rgba(201,168,76,0.12)' }}
              >
                👩‍🎨 কারিগর তালিকা
              </Link>
            </li>
            <li>
              <Link 
                href="/heritage" 
                onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--cream)', fontSize: '1.05rem', textDecoration: 'none', display: 'block', padding: '8px 0', borderBottom: '1px solid rgba(201,168,76,0.12)' }}
              >
                📜 ঐতিহ্য ও ইতিহাস
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--cream)', fontSize: '1.05rem', textDecoration: 'none', display: 'block', padding: '8px 0', borderBottom: '1px solid rgba(201,168,76,0.12)' }}
              >
                ℹ️ আমাদের সম্পর্কে
              </Link>
            </li>
            <li style={{ marginTop: 10 }}>
              <Link 
                href="/become-artisan" 
                onClick={() => setMenuOpen(false)}
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', textAlign: 'center', padding: '12px' }}
              >
                🎨 কারিগর হিসেবে যোগ দিন
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
