import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ArtisanMessageModal from '../../components/ArtisanMessageModal';
import { ARTISANS, CRAFTS, PRODUCTS } from '../../lib/data';

export async function generateStaticParams() {
  return ARTISANS.map(a => ({ id: String(a.id) }));
}

export default async function ArtisanPage({ params }) {
  const resolvedParams = await params;
  const artisan = ARTISANS.find(a => a.id === Number(resolvedParams.id));
  if (!artisan) notFound();

  const craft = CRAFTS.find(c => c.id === artisan.craft);
  const products = PRODUCTS.filter(p => p.artisanId === artisan.id);

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--ink) 0%, #3d2010 100%)',
        padding: '56px 0 48px',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div style={{
            width: 110, height: 110, borderRadius: '50%', overflow: 'hidden',
            border: '3px solid var(--gold-dark)',
            boxShadow: '0 0 0 8px rgba(201,168,76,.15)',
            flexShrink: 0,
          }}>
            {artisan.avatar ? (
              <img src={artisan.avatar} alt={artisan.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ fontSize: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))' }}>
                {artisan.icon}
              </div>
            )}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
              <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700 }}>
                {artisan.name}
              </h1>
              {artisan.verified && (
                <span className="verified-badge" style={{ fontSize: '.82rem', padding: '4px 12px' }}>
                  ✓ NID ভেরিফাইড কারিগর
                </span>
              )}
            </div>
            <p style={{ color: 'rgba(232,201,122,.85)', fontSize: '.95rem', marginBottom: 4 }}>
              {craft?.icon} {craft?.label} ({craft?.labelEn}) · {artisan.years} বছরের ঐতিহ্যবাহী সাধনা
            </p>
            <p style={{ color: 'rgba(232,201,122,.65)', fontSize: '.88rem' }}>
              📍 {artisan.region} · রেটিং ★ {artisan.rating || '4.9'} ({artisan.salesCount || '100+'} টি সফল ডেলিভারি)
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40, alignItems: 'start' }}>
            {/* Main Content: Story and Products */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>
                কারিগরের জীবন ও শিল্পের গল্প
              </h2>
              <div className="quote-box" style={{ marginBottom: 36, padding: '24px 30px' }}>
                <p style={{ fontSize: '1.08rem', fontStyle: 'italic', color: 'var(--ink-light)', position: 'relative', zIndex: 1, lineHeight: 2 }}>
                  "{artisan.story}"
                </p>
                <p style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--terracotta)', fontWeight: 600, position: 'relative', zIndex: 1 }}>
                  — {artisan.name}, {artisan.region}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)' }}>
                  {artisan.name}-এর তৈরি পণ্যসমূহ ({products.length}টি)
                </h2>
              </div>

              <div className="product-grid">
                {products.map(p => (
                  <Link key={p.id} href={`/product/${p.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{
                        height: 200, position: 'relative', overflow: 'hidden',
                        background: 'linear-gradient(135deg, var(--parchment), var(--parchment-dark))',
                      }}>
                        {p.image ? (
                          <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '4.5rem' }}>
                            {p.emoji}
                          </div>
                        )}
                        {p.heritage && (
                          <span className="badge" style={{ position: 'absolute', top: 10, left: 10 }}>
                            🏛️ ঐতিহ্য
                          </span>
                        )}
                      </div>
                      <div className="product-card-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <h3 className="product-card-name" style={{ fontSize: '1.02rem', minHeight: '2.6em' }}>{p.name}</h3>
                        <div className="product-card-footer" style={{ marginTop: 'auto' }}>
                          <div className="product-price">৳{p.price.toLocaleString()} <span>টাকা</span></div>
                          <span style={{ fontSize: '0.8rem', color: 'var(--terracotta)', fontWeight: 700 }}>কিনুন →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar: Details & Direct Contact */}
            <div>
              <div className="card" style={{ padding: '24px' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: 18, fontSize: '1.05rem', borderBottom: '1px solid rgba(201,168,76,.2)', paddingBottom: '8px' }}>
                  কারিগর পরিচিতি
                </h3>
                {[
                  ['শিল্পের ধরন', craft?.label || ''],
                  ['অঞ্চল', artisan.region],
                  ['কাজের অভিজ্ঞতা', `${artisan.years} বছর`],
                  ['যাচাইকরণ', artisan.verified ? '✓ NID ভেরিফাইড' : 'যাচাই প্রক্রিয়াধীন'],
                  ['মোট রেটিং', `★ ${artisan.rating || 4.9} / 5.0`],
                  ['মোট তৈরি পণ্য', `${products.length}টি লাইভ`],
                ].map(([k, v]) => (
                  <div key={k} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '10px 0', borderBottom: '1px solid rgba(201,168,76,.12)',
                    fontSize: '.86rem',
                  }}>
                    <span style={{ color: 'var(--worn-brown)' }}>{k}</span>
                    <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{v}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: '24px', marginTop: 20, textAlign: 'center', background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(192,82,43,0.08))' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '8px' }}>💬</div>
                <h4 style={{ color: 'var(--ink)', fontWeight: 700, marginBottom: '6px' }}>সরাসরি বার্তা পাঠান</h4>
                <p style={{ fontSize: '.84rem', color: 'var(--worn-brown)', lineHeight: 1.7, marginBottom: 18 }}>
                  কাস্টম অর্ডার কিংবা বিশেষ মাপের পণ্যের জন্য কারিগরের সাথে সরাসরি যোগাযোগ করুন।
                </p>
                <ArtisanMessageModal artisanName={artisan.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
