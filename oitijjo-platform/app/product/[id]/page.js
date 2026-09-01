import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PRODUCTS, ARTISANS, CRAFTS } from '../../lib/data';

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ id: String(p.id) }));
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = PRODUCTS.find(p => p.id === Number(resolvedParams.id));
  if (!product) notFound();

  const artisan = ARTISANS.find(a => a.id === product.artisanId);
  const craft = CRAFTS.find(c => c.id === product.craft);
  const related = PRODUCTS.filter(p => p.craft === product.craft && p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          {/* Breadcrumb */}
          <p style={{ fontSize: '.85rem', color: 'var(--worn-brown)', marginBottom: 28 }}>
            <Link href="/" style={{ color: 'var(--gold-dark)' }}>হোম</Link> →{' '}
            <Link href="/shop" style={{ color: 'var(--gold-dark)' }}>পণ্য</Link> →{' '}
            <Link href={`/shop?craft=${craft?.id}`} style={{ color: 'var(--gold-dark)' }}>{craft?.label}</Link> →{' '}
            {product.name}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'start' }}>
            {/* Left: Product Image */}
            <div>
              <div className="card" style={{
                height: 440, position: 'relative', overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--parchment) 0%, var(--parchment-dark) 100%)',
              }}>
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '10rem' }}>
                    {product.emoji}
                  </div>
                )}
                
                {product.heritage && (
                  <span className="badge" style={{ position: 'absolute', top: 18, left: 18, fontSize: '.85rem', padding: '6px 14px' }}>
                    🏛️ ঐতিহ্যবাহী হস্তশিল্প
                  </span>
                )}

                {product.originalPrice && (
                  <span style={{
                    position: 'absolute', top: 18, right: 18,
                    background: 'var(--deep-red)', color: 'white',
                    fontSize: '0.85rem', fontWeight: 700, padding: '5px 12px', borderRadius: '4px'
                  }}>
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% ছাড়
                  </span>
                )}
              </div>

              {/* Artisan Note */}
              <div style={{ marginTop: '16px', background: 'rgba(201,168,76,0.08)', border: '1px dashed rgba(201,168,76,0.4)', borderRadius: '6px', padding: '12px 16px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '1.4rem' }}>🌿</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--worn-brown)' }}>
                  এই পণ্যটি সম্পূর্ণ হাতে তৈরি। কোনো কারখানা বা যান্ত্রিক ক্ষতিকর প্রক্রিয়া ছাড়া খাঁটি প্রাকৃতিক উপাদানে নির্মিত।
                </span>
              </div>
            </div>

            {/* Right: Product Details & Purchase */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--terracotta)', fontSize: '.85rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                  {craft?.label} · {product.region}
                </span>
                <span style={{ color: '#e67e22', fontSize: '0.9rem', fontWeight: 700 }}>
                  ★ {product.rating} ({product.reviewsCount || 24} রিভিউ)
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(1.6rem,2.5vw,2.4rem)', fontWeight: 700, color: 'var(--ink)', marginBottom: 14, lineHeight: 1.3 }}>
                {product.name}
              </h1>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: 20 }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--terracotta)' }}>
                  ৳{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span style={{ fontSize: '1.2rem', textDecoration: 'line-through', color: 'var(--worn-brown)', opacity: 0.7 }}>
                    ৳{product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span style={{ fontSize: '.85rem', color: '#05682c', fontWeight: 600, background: 'rgba(0,160,60,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  স্টক আছে ({product.stock || 5}টি অবশিষ্ট)
                </span>
              </div>

              <p style={{ color: 'var(--ink-light)', lineHeight: 1.9, marginBottom: 24, fontSize: '0.95rem' }}>
                {product.desc}
              </p>

              {/* Product Specifications Table */}
              <div className="card" style={{ padding: '16px 20px', marginBottom: 24, background: 'rgba(253,248,240,0.7)' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--ink)', marginBottom: '10px', borderBottom: '1px solid rgba(201,168,76,0.2)', paddingBottom: '6px' }}>
                  পণ্যের বিশদ বিবরণ
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.84rem' }}>
                  <div><strong>উপাদান:</strong> {product.material || 'প্রাকৃতিক উপাদান'}</div>
                  <div><strong>সাইজ/পরিমাপ:</strong> {product.size || 'স্ট্যান্ডার্ড'}</div>
                  <div><strong>বানাতে সময় লেগেছে:</strong> {product.timeToMake || '৭-১৫ দিন'}</div>
                  <div><strong>উৎপত্তিস্থল:</strong> {product.region}</div>
                </div>
              </div>

              {/* Artisan Mini Card */}
              {artisan && (
                <div className="card" style={{ padding: '16px 20px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%', overflow: 'hidden',
                    border: '2px solid var(--gold-dark)', flexShrink: 0,
                  }}>
                    {artisan.avatar ? (
                      <img src={artisan.avatar} alt={artisan.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>{artisan.icon}</div>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <p style={{ fontWeight: 700, color: 'var(--ink)' }}>{artisan.name}</p>
                      {artisan.verified && <span className="verified-badge">✓ NID ভেরিফাইড</span>}
                    </div>
                    <p style={{ fontSize: '.8rem', color: 'var(--worn-brown)' }}>📍 {artisan.region} · {artisan.years} বছরের অভিজ্ঞতা</p>
                    <Link href={`/artisan/${artisan.id}`} style={{ fontSize: '.8rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                      কারিগরের গল্প ও অন্যান্য পণ্য দেখুন →
                    </Link>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href={`/cart?product=${product.id}`} className="btn-primary" style={{ flex: 1.2, justifyContent: 'center', padding: '14px 24px', fontSize: '1rem' }}>
                  🛒 সরাসরি কিনুন (এসক্রো পেমেন্ট)
                </Link>
                <Link href={`/artisan/${artisan?.id}`} className="btn-outline" style={{ flex: 1, justifyContent: 'center', padding: '14px 20px' }}>
                  💬 কারিগরের সাথে কথা বলুন
                </Link>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: '16px' }}>
                {[
                  '🔒 এসক্রো পেমেন্টে শতভাগ নিরাপত্তা',
                  '🚚 সারা দেশে হোম ডেলিভারি',
                  '↩️ ৭ দিনের সহজ রিটার্ন সুবিধা',
                  '🌾 ১০০% দেশিয় হস্তশিল্প'
                ].map(b => (
                  <span key={b} style={{ fontSize: '.78rem', color: 'var(--worn-brown)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Artisan's Story Quote Section */}
          {artisan && (
            <div style={{ marginTop: 64 }}>
              <div className="ornament">✦ ✦ ✦</div>
              <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 700, marginBottom: 24, color: 'var(--ink)' }}>
                এই পণ্যের পেছনের গল্প
              </h2>
              <div className="quote-box" style={{ maxWidth: 740, margin: '0 auto', padding: '28px 36px' }}>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--ink-light)', position: 'relative', zIndex: 1, lineHeight: 2 }}>
                  "{artisan.story}"
                </p>
                <p style={{ marginTop: 16, fontSize: '.88rem', color: 'var(--terracotta)', fontStyle: 'normal', fontWeight: 700, position: 'relative', zIndex: 1 }}>
                  — {artisan.name}, {artisan.region} ({craft?.label} শিল্পী)
                </p>
              </div>
            </div>
          )}

          {/* Related Products */}
          {related.length > 0 && (
            <div style={{ marginTop: 64 }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 24, color: 'var(--ink)' }}>
                একই ক্যাটাগরির আরও পণ্য
              </h2>
              <div className="product-grid">
                {related.map(r => (
                  <Link key={r.id} href={`/product/${r.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ 
                        height: 180, position: 'relative', overflow: 'hidden',
                        background: 'linear-gradient(135deg, var(--parchment), var(--parchment-dark))' 
                      }}>
                        {r.image ? (
                          <img src={r.image} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '4rem' }}>
                            {r.emoji}
                          </div>
                        )}
                      </div>
                      <div className="product-card-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <h3 className="product-card-name" style={{ fontSize: '1rem', minHeight: '2.5em' }}>{r.name}</h3>
                        <div className="product-card-footer" style={{ marginTop: 'auto' }}>
                          <div className="product-price">৳{r.price.toLocaleString()} <span>টাকা</span></div>
                          <span style={{ fontSize: '0.8rem', color: 'var(--gold-dark)', fontWeight: 600 }}>দেখুন →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
