'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PRODUCTS, ARTISANS } from '../lib/data';

function CartContent() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState([]);
  const [payMethod, setPayMethod] = useState('bkash');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('cart'); // cart | pay | done

  useEffect(() => {
    setMounted(true);
    const productId = Number(searchParams.get('product'));
    if (productId) {
      const initialProduct = PRODUCTS.find(p => p.id === productId);
      if (initialProduct) {
        setCart([{ ...initialProduct, qty: 1 }]);
      }
    }
  }, [searchParams]);

  if (!mounted) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--worn-brown)' }}>
        <p>কার্ট লোড হচ্ছে...</p>
      </div>
    );
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const removeItem = (id) => setCart(c => c.filter(i => i.id !== id));
  const adjustQty = (id, delta) => setCart(c =>
    c.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
  );

  return (
    <>
      {step === 'cart' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 36, alignItems: 'start' }}>
          {/* Cart items */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 20 }}>
              আপনার কার্ট ({cart.length}টি পণ্য)
            </h2>

            {cart.length === 0 ? (
              <div className="card" style={{ padding: 40, textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>🛒</div>
                <p style={{ color: 'var(--worn-brown)', marginBottom: 20 }}>কার্ট খালি আছে।</p>
                <Link href="/shop" className="btn-primary">পণ্য দেখুন</Link>
              </div>
            ) : (
              cart.map(item => {
                const artisan = ARTISANS.find(a => a.id === item.artisanId);
                return (
                  <div key={item.id} className="card" style={{ display: 'flex', gap: 18, padding: '18px 20px', marginBottom: 16, alignItems: 'center' }}>
                    <div style={{ width: 72, height: 72, overflow: 'hidden', background: 'var(--parchment)', borderRadius: 6, flexShrink: 0, position: 'relative' }}>
                      {item.image ? (
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '2.5rem' }}>
                          {item.emoji}
                        </div>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{item.name}</p>
                      <p style={{ fontSize: '.78rem', color: 'var(--worn-brown)' }}>কারিগর: {artisan?.name}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                      <button onClick={() => adjustQty(item.id, -1)} style={{ width: 28, height: 28, borderRadius: '50%', border: '1.5px solid var(--gold)', background: 'transparent', cursor: 'pointer', fontWeight: 700, color: 'var(--ink)' }}>−</button>
                      <span style={{ fontWeight: 700, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                      <button onClick={() => adjustQty(item.id, 1)} style={{ width: 28, height: 28, borderRadius: '50%', border: '1.5px solid var(--gold)', background: 'transparent', cursor: 'pointer', fontWeight: 700, color: 'var(--ink)' }}>+</button>
                    </div>
                    <div style={{ minWidth: 80, textAlign: 'right' }}>
                      <p style={{ fontWeight: 700, color: 'var(--terracotta)' }}>৳{(item.price * item.qty).toLocaleString()}</p>
                      <button onClick={() => removeItem(item.id)} style={{ fontSize: '.72rem', color: 'var(--worn-brown)', background: 'none', border: 'none', cursor: 'pointer', marginTop: 4 }}>সরান ✕</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Order summary */}
          <div>
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: 20 }}>অর্ডার সারসংক্ষেপ</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem', marginBottom: 10 }}>
                <span style={{ color: 'var(--worn-brown)' }}>পণ্যের মূল্য</span>
                <span>৳{total.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem', marginBottom: 10 }}>
                <span style={{ color: 'var(--worn-brown)' }}>ডেলিভারি চার্জ</span>
                <span>৳৮০</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.9rem', paddingTop: 10, borderTop: '1px solid rgba(201,168,76,.3)', marginBottom: 20 }}>
                <span style={{ fontWeight: 700 }}>মোট</span>
                <span style={{ fontWeight: 700, color: 'var(--terracotta)', fontSize: '1.1rem' }}>৳{(total + 80).toLocaleString()}</span>
              </div>

              <div style={{ background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 6, padding: 12, marginBottom: 20, fontSize: '.8rem', color: 'var(--worn-brown)' }}>
                🔒 <strong>এসক্রো পেমেন্ট:</strong> পণ্য পাওয়ার আগে কারিগর টাকা পাবেন না। সম্পূর্ণ নিরাপদ।
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14, fontSize: '1rem' }}
                onClick={() => cart.length > 0 && setStep('pay')} disabled={cart.length === 0}>
                পেমেন্টে যান →
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 'pay' && (
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <div className="card" style={{ padding: '36px 40px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 24 }}>পেমেন্ট</h2>

            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
              {[
                { id: 'bkash', label: 'bKash', color: '#E2136E' },
                { id: 'nagad', label: 'Nagad', color: '#F7A400' },
                { id: 'cod', label: 'ক্যাশ অন ডেলিভারি', color: 'var(--terracotta)' },
              ].map(m => (
                <button 
                  key={m.id}
                  type="button"
                  id={`payment-method-${m.id}`}
                  onClick={() => setPayMethod(m.id)}
                  style={{
                    flex: 1, padding: '12px 8px', borderRadius: 6,
                    border: `2px solid ${payMethod === m.id ? m.color : 'rgba(201,168,76,.25)'}`,
                    background: payMethod === m.id ? `${m.color}15` : 'transparent',
                    cursor: 'pointer', fontSize: '.82rem', fontWeight: payMethod === m.id ? 700 : 400,
                    color: payMethod === m.id ? m.color : 'var(--worn-brown)',
                    fontFamily: 'inherit', transition: 'all .2s',
                  }}>
                  {m.label}
                </button>
              ))}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setStep('done'); }}>
              {payMethod !== 'cod' && (
                <div className="form-group">
                  <label htmlFor="payment_phone_number" className="form-label">{payMethod === 'bkash' ? 'bKash' : 'Nagad'} নম্বর *</label>
                  <input 
                    required
                    id="payment_phone_number"
                    name="payment_phone_number"
                    type="tel"
                    autoComplete="tel"
                    className="form-input" 
                    placeholder="01XXXXXXXXX" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)} 
                  />
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid rgba(201,168,76,.2)', marginBottom: 20 }}>
                <span style={{ fontWeight: 700 }}>মোট পরিশোধ</span>
                <span style={{ fontWeight: 700, color: 'var(--terracotta)', fontSize: '1.15rem' }}>৳{(total + 80).toLocaleString()}</span>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>
                ✓ নিশ্চিত করুন ও অর্ডার দিন
              </button>
            </form>
          </div>
        </div>
      )}

      {step === 'done' && (
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          <div className="card" style={{ padding: '48px 36px' }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>✅</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>অর্ডার সফল!</h2>
            <p style={{ color: 'var(--worn-brown)', lineHeight: 1.9, marginBottom: 24 }}>
              আপনার অর্ডার কারিগরের কাছে পাঠানো হয়েছে। এসক্রো পেমেন্টে আপনার টাকা সুরক্ষিত।
              পণ্য পাওয়ার পর কারিগর পেমেন্ট পাবেন।
            </p>
            <p style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--terracotta)', marginBottom: 28 }}>
              প্রত্যাশিত ডেলিভারি: ৩–৭ কার্যদিবস
            </p>
            <Link href="/shop" className="btn-primary" style={{ justifyContent: 'center' }}>
              আরও কেনাকাটা করুন
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default function CartPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'linear-gradient(135deg, var(--ink), #3d2010)', padding: '48px 0 36px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, marginBottom: 8 }}>কার্ট ও পেমেন্ট</h1>
        <p style={{ color: 'rgba(232,201,122,.65)', fontSize: '.95rem' }}>এসক্রো পেমেন্টে নিরাপদ কেনাকাটা</p>
      </div>
      <section className="section">
        <div className="container">
          <Suspense fallback={<p style={{ textAlign: 'center', color: 'var(--worn-brown)' }}>লোড হচ্ছে…</p>}>
            <CartContent />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}
