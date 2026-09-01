import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ARTISANS, CRAFTS, PRODUCTS } from '../lib/data';

export default function ArtisansPage() {
  return (
    <>
      <Navbar />

      <div style={{
        background: 'linear-gradient(135deg, var(--ink) 0%, #3d2010 100%)',
        padding: '48px 0 36px', textAlign: 'center',
      }}>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, marginBottom: 8 }}>
          আমাদের গর্বিত কারিগর
        </h1>
        <p style={{ color: 'rgba(232,201,122,.65)', fontSize: '.95rem' }}>
          যাদের হাতের ছোঁয়ায় প্রজন্ম থেকে প্রজন্মে বেঁচে আছে বাংলার লোকঐতিহ্য
        </p>
      </div>

      <section className="section">
        <div className="container">
          <div className="ornament">✦ ✦ ✦</div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {ARTISANS.map(a => {
              const craft = CRAFTS.find(c => c.id === a.craft);
              const productCount = PRODUCTS.filter(p => p.artisanId === a.id).length;
              return (
                <Link key={a.id} href={`/artisan/${a.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '24px', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <div style={{
                        width: 76, height: 76, borderRadius: '50%', overflow: 'hidden',
                        border: '2.5px solid var(--gold-dark)', flexShrink: 0,
                        boxShadow: '0 0 0 5px rgba(201,168,76,.12)',
                      }}>
                        {a.avatar ? (
                          <img src={a.avatar} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <div style={{ fontSize: '2.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))' }}>
                            {a.icon}
                          </div>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
                          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--ink)' }}>{a.name}</h3>
                          {a.verified && <span className="verified-badge">✓ NID</span>}
                        </div>
                        <p style={{ fontSize: '.82rem', color: 'var(--terracotta)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                          {craft?.icon} {craft?.label}
                        </p>
                        <p style={{ fontSize: '.8rem', color: 'var(--worn-brown)' }}>
                          📍 {a.region} · {a.years} বছরের অভিজ্ঞতা
                        </p>
                      </div>
                    </div>

                    <div className="quote-box" style={{ marginTop: 18, marginBottom: 18, flex: 1 }}>
                      <p style={{ fontStyle: 'italic', fontSize: '.88rem', color: 'var(--ink-light)', position: 'relative', zIndex: 1, lineHeight: 1.7 }}>
                        "{a.story}"
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: '12px', marginTop: 'auto' }}>
                      <span style={{ fontSize: '.82rem', color: 'var(--worn-brown)', fontWeight: 600 }}>
                        🛍️ {productCount}টি সংগৃহীত পণ্য
                      </span>
                      <span style={{ fontSize: '.85rem', color: 'var(--terracotta)', fontWeight: 700 }}>
                        প্রোফাইল দেখুন →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
