'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CRAFTS, ARTISANS, PRODUCTS } from '../lib/data';

export default function ShopPage() {
  const [activeCraft, setActiveCraft] = useState('all');
  const [sort, setSort] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = PRODUCTS
    .filter(p => {
      const matchesCraft = activeCraft === 'all' || p.craft === activeCraft;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCraft && matchesSearch;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <Navbar />

      {/* Page header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--ink) 0%, #3d2010 100%)',
        padding: '48px 0 36px', textAlign: 'center',
      }}>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, marginBottom: 8 }}>
          ঐতিহ্যবাহী পণ্যের সম্ভার
        </h1>
        <p style={{ color: 'rgba(232,201,122,.65)', fontSize: '.95rem' }}>
          সরাসরি হস্তশিল্পীদের থেকে সংগৃহীত খাঁটি পণ্যসমূহ
        </p>
      </div>

      <section className="section">
        <div className="container">
          {/* Search & Filter Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
              {/* Search Box */}
              <div style={{ position: 'relative', minWidth: '280px', flex: '1 1 300px' }}>
                <input 
                  type="text"
                  placeholder="পণ্য, অঞ্চল বা মোটিফ দিয়ে খুঁজুন..." 
                  className="form-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ paddingLeft: '38px', borderRadius: '25px' }}
                />
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>
                  🔍
                </span>
              </div>

              {/* Sort Selector */}
              <select
                className="form-input"
                style={{ width: 'auto', padding: '10px 18px', borderRadius: '25px' }}
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                <option value="default">ক্রম: ডিফল্ট সাজানো</option>
                <option value="rating">সেরা রেটিং (★)</option>
                <option value="price-asc">দাম: কম থেকে বেশি</option>
                <option value="price-desc">দাম: বেশি থেকে কম</option>
              </select>
            </div>

            {/* Filter categories */}
            <div className="filter-bar" style={{ margin: 0 }}>
              <button
                className={`filter-btn ${activeCraft === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCraft('all')}
              >
                সব পণ্য ({PRODUCTS.length})
              </button>
              {CRAFTS.map(c => {
                const count = PRODUCTS.filter(p => p.craft === c.id).length;
                return (
                  <button
                    key={c.id}
                    className={`filter-btn ${activeCraft === c.id ? 'active' : ''}`}
                    onClick={() => setActiveCraft(c.id)}
                  >
                    {c.icon} {c.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, borderBottom: '1px solid rgba(201,168,76,0.2)', paddingBottom: '12px' }}>
            <p style={{ color: 'var(--worn-brown)', fontSize: '.9rem', margin: 0 }}>
              মোট <strong>{filtered.length}</strong>টি পণ্য প্রদর্শিত হচ্ছে
            </p>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: 'var(--terracotta)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}
              >
                ফিল্টার মুছুন ✕
              </button>
            )}
          </div>

          {/* Product grid */}
          <div className="product-grid">
            {filtered.map(p => {
              const artisan = ARTISANS.find(a => a.id === p.artisanId);
              const craft = CRAFTS.find(c => c.id === p.craft);
              return (
                <Link key={p.id} href={`/product/${p.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{
                      height: 220, position: 'relative', overflow: 'hidden',
                      background: 'linear-gradient(135deg, var(--parchment) 0%, var(--parchment-dark) 100%)',
                    }}>
                      {p.image ? (
                        <img 
                          src={p.image} 
                          alt={p.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '4.5rem' }}>
                          {p.emoji}
                        </div>
                      )}

                      {p.heritage && (
                        <span className="badge" style={{ position: 'absolute', top: 12, left: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                          🏛️ ঐতিহ্য
                        </span>
                      )}

                      {p.originalPrice && (
                        <span style={{
                          position: 'absolute', top: 12, right: 12,
                          background: 'var(--deep-red)', color: 'white',
                          fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '4px'
                        }}>
                          {Math.round((1 - p.price / p.originalPrice) * 100)}% ছাড়
                        </span>
                      )}
                    </div>

                    <div className="product-card-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                        <p className="product-card-craft" style={{ margin: 0 }}>
                          {craft?.label} · {p.region}
                        </p>
                        <span style={{ fontSize: '0.78rem', color: '#e67e22', fontWeight: 700 }}>
                          ★ {p.rating}
                        </span>
                      </div>

                      <h3 className="product-card-name" style={{ fontSize: '1.05rem', minHeight: '2.7em' }}>{p.name}</h3>
                      <p className="product-card-artisan">
                        কারিগর: {artisan?.name}
                        {artisan?.verified && <span className="verified-badge" style={{ marginLeft: 6 }}>✓ ভেরিফাইড</span>}
                      </p>

                      <div className="product-card-footer" style={{ marginTop: 'auto', paddingTop: '12px' }}>
                        <div className="product-price">
                          ৳{p.price.toLocaleString()} 
                          {p.originalPrice && (
                            <span style={{ textDecoration: 'line-through', fontSize: '0.8rem', marginLeft: '6px', color: '#999' }}>
                              ৳{p.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <button className="btn-primary" style={{ padding: '6px 14px', fontSize: '.8rem' }}>
                          বিস্তারিত
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--worn-brown)' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🔍</div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: 8 }}>কোনো পণ্য খুঁজে পাওয়া যায়নি</h3>
              <p>অনুগ্রহ করে অন্য কোনো শব্দ দিয়ে সার্চ করুন অথবা ফিল্টার পরিবর্তন করুন।</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
