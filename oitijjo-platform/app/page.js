import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductImage from './components/ProductImage';
import { CRAFTS, ARTISANS, PRODUCTS } from './lib/data';

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 8);
  const featuredArtisans = ARTISANS.slice(0, 4);

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)',
              color: 'var(--gold-dark)', fontSize: '.8rem', fontWeight: 600,
              padding: '5px 14px', borderRadius: 20, marginBottom: 22, letterSpacing: 1,
            }}>
              ⚜ বাংলাদেশের প্রথম সরাসরি কারিগর মার্কেটপ্লেস
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 700,
              color: 'var(--ink)', lineHeight: 1.2, marginBottom: 22,
              textShadow: '0 2px 0 var(--gold-light)',
            }}>
              বাংলার <span style={{ color: 'var(--terracotta)' }}>হারিয়ে যাওয়া</span>{' '}
              শিল্পকে<br />ফিরিয়ে আনুন
            </h1>

            <p style={{
              fontSize: '1.05rem', color: 'var(--worn-brown)',
              maxWidth: 540, marginBottom: 36, lineHeight: 1.9,
            }}>
              মধ্যস্থভোগী ছাড়াই সরাসরি কারিগরের কাছ থেকে কিনুন।
              প্রতিটি কেনাকাটায় টিকে থাকে একটি পরিবার, বেঁচে থাকে একটি ঐতিহ্য।
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/shop" className="btn-primary">
                🛍️ পণ্য দেখুন ({PRODUCTS.length}টি সংরক্ষিত)
              </Link>
              <Link href="/artisans" className="btn-outline">
                কারিগরদের গল্প →
              </Link>
            </div>

            {/* Stats */}
            <div className="stat-chips" style={{ justifyContent: 'flex-start', marginTop: 48 }}>
              {[
                { v: '৫০০+', l: 'বছরের ঐতিহ্য' },
                { v: '১২,০০০+', l: 'সক্রিয় কারিগর' },
                { v: '৪টি', l: 'UNESCO শিল্প' },
                { v: '৬৪ জেলা', l: 'জুড়ে বিস্তৃত' },
              ].map(s => (
                <div className="stat-chip" key={s.l}>
                  <span className="stat-chip-value">{s.v}</span>
                  <span className="stat-chip-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Illustration */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0,
            width: '42%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', pointerEvents: 'none',
          }} aria-hidden>
            <div style={{
              fontSize: '12rem', opacity: .08, userSelect: 'none',
              animation: 'float 5s ease-in-out infinite',
              filter: 'drop-shadow(0 0 40px rgba(201,168,76,.4))',
            }}>🏺</div>
          </div>
        </div>
      </section>

      {/* ===== CRAFT CATEGORIES ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <div className="ornament">✦ ✦ ✦</div>
            <h2>শিল্পের ধরন</h2>
            <p>বাংলার চার রকম ঐতিহ্যবাহী কারুশিল্প থেকে বেছে নিন</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {CRAFTS.map(c => (
              <Link key={c.id} href={`/shop?craft=${c.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '0', textAlign: 'center', cursor: 'pointer', overflow: 'hidden' }}>
                  <div style={{
                    height: '140px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <img 
                      src={c.heroImage} 
                      alt={c.label} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      className="craft-card-img"
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(44,26,14,0.85) 0%, rgba(44,26,14,0.2) 60%, transparent 100%)',
                      display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '12px'
                    }}>
                      <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>{c.icon}</span>
                    </div>
                  </div>
                  <div style={{ padding: '20px 16px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                      {c.label}
                    </h3>
                    <p style={{ fontSize: '.78rem', color: c.color, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
                      {c.labelEn}
                    </p>
                    <p style={{ fontSize: '.82rem', color: 'var(--worn-brown)', lineHeight: 1.5 }}>
                      {c.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="ornament">✦ ✦ ✦</div>
            <h2>বিশেষ সংগৃহীত পণ্য</h2>
            <p>সরাসরি গ্রামীণ কারিগরদের তৈরি খাঁটি হস্তশিল্প</p>
          </div>

          <div className="product-grid">
            {featuredProducts.map(p => {
              const artisan = ARTISANS.find(a => a.id === p.artisanId);
              return (
                <Link key={p.id} href={`/product/${p.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Product image */}
                    <div style={{
                      height: 220, position: 'relative', overflow: 'hidden',
                      background: `linear-gradient(135deg, var(--parchment) 0%, var(--parchment-dark) 100%)`,
                    }}>
                      <ProductImage src={p.image} alt={p.name} emoji={p.emoji} />
                      
                      {p.heritage && (
                        <span className="badge" style={{ position: 'absolute', top: 12, left: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                          🏛️ হেরিটেজ
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
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        <p className="product-card-craft" style={{ margin: 0 }}>
                          {CRAFTS.find(c => c.id === p.craft)?.label} · {p.region}
                        </p>
                        <span style={{ fontSize: '0.78rem', color: '#e67e22', fontWeight: 700 }}>
                          ★ {p.rating}
                        </span>
                      </div>
                      
                      <h3 className="product-card-name" style={{ fontSize: '1.05rem', minHeight: '2.7em' }}>{p.name}</h3>
                      <p className="product-card-artisan">কারিগর: {artisan?.name} {artisan?.verified && '✓'}</p>
                      
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
                          অর্ডার করুন
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/shop" className="btn-outline">সব {PRODUCTS.length}টি পণ্য দেখুন →</Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-alt">
        <div className="container">
          <div className="section-title">
            <div className="ornament">✦ ✦ ✦</div>
            <h2>কীভাবে কাজ করে</h2>
            <p>মধ্যস্থভোগী ছাড়াই সরাসরি কারিগরের কাছ থেকে কিনুন</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { step: '১', icon: '🔍', title: 'খুঁজুন', desc: 'অঞ্চল বা হস্তশিল্পের ক্যাটাগরি অনুযায়ী খাঁটি পণ্য ব্রাউজ করুন' },
              { step: '২', icon: '👩‍🎨', title: 'কারিগর জানুন', desc: '"কারিগরের গল্প" পড়ে তাদের অভিজ্ঞতা, ঐতিহ্য ও সাধনা সম্পর্কে জানুন' },
              { step: '৩', icon: '🔒', title: 'নিরাপদে কিনুন', desc: 'bKash/Nagad এসক্রো পেমেন্টে আপনার টাকা শতভাগ নিরাপদ' },
              { step: '৪', icon: '📦', title: 'ডেলিভারি পান', desc: 'সুন্দরবন ও পাঠাও কুরিয়ার সার্ভিসে দ্রুততম সময়ে আপনার ঠিকানায়' },
            ].map(s => (
              <div key={s.step} className="card" style={{ padding: '28px 20px', textAlign: 'center' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold-dark), var(--terracotta))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--cream)', fontWeight: 700, fontSize: '1rem',
                  margin: '0 auto 14px',
                }}>{s.step}</div>
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '.85rem', color: 'var(--worn-brown)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARTISANS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <div className="ornament">✦ ✦ ✦</div>
            <h2>আমাদের কারিগর</h2>
            <p>যাদের হাতে বেঁচে আছে বাংলার শতবর্ষী অহংকার</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {featuredArtisans.map(a => (
              <Link key={a.id} href={`/artisan/${a.id}`} style={{ textDecoration: 'none' }}>
                <div className="card artisan-card" style={{ cursor: 'pointer', height: '100%' }}>
                  <div style={{
                    width: 90, height: 90, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 14px',
                    border: '3px solid var(--gold-dark)', boxShadow: '0 0 0 5px rgba(201,168,76,0.15)'
                  }}>
                    {a.avatar ? (
                      <img src={a.avatar} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ fontSize: '2.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>{a.icon}</div>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 6 }}>
                    <p className="artisan-name">{a.name}</p>
                    {a.verified && <span className="verified-badge">✓ ভেরিফাইড</span>}
                  </div>
                  <p className="artisan-craft">{CRAFTS.find(c => c.id === a.craft)?.label}</p>
                  <p className="artisan-region">📍 {a.region} ({a.years} বছরের সাধনা)</p>
                  <p style={{ fontSize: '.82rem', color: 'var(--worn-brown)', marginTop: 12, fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{a.story.slice(0, 75)}…"
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/artisans" className="btn-outline">সব {ARTISANS.length} জন কারিগর দেখুন →</Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section style={{
        padding: '70px 0',
        background: 'linear-gradient(135deg, var(--ink) 0%, #3d2010 60%, #2c1a0e 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>⚜</div>
          <h2 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 14, fontWeight: 700 }}>
            আপনি কি একজন গ্রামীণ কারিগর?
          </h2>
          <p style={{ color: 'rgba(232,201,122,.7)', maxWidth: 540, margin: '0 auto 32px', lineHeight: 1.8 }}>
            আপনার শিল্পকে বিশ্বদরবারে তুলে ধরুন। জাতীয় পরিচয়পত্র (NID) ভেরিফিকেশনে ক্রেতাদের আস্থা অর্জন করুন এবং মধ্যস্থভোগী ছাড়া সম্পূর্ণ ন্যায্য মূল্য বুঝে নিন।
          </p>
          <Link href="/become-artisan" className="btn-primary" style={{ fontSize: '1.05rem', padding: '14px 34px' }}>
            🎨 কারিগর হিসেবে যোগ দিন
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
