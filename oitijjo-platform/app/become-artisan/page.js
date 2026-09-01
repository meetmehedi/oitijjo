'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const STEPS = ['ব্যক্তিগত তথ্য', 'NID যাচাই', 'OTP যাচাই', 'শিল্পের তথ্য', 'সম্পন্ন'];

export default function BecomeArtisanPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '', phone: '', nid: '', otp: '',
    craft: '', region: '', story: '', experience: '',
  });
  const [otpSent, setOtpSent] = useState(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const sendOtp = () => {
    if (form.phone.length >= 11) { setOtpSent(true); }
  };

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  return (
    <>
      <Navbar />

      <div style={{ background: 'linear-gradient(135deg, var(--ink), #3d2010)', padding: '48px 0 36px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, marginBottom: 8 }}>
          কারিগর হিসেবে যোগ দিন
        </h1>
        <p style={{ color: 'rgba(232,201,122,.65)', fontSize: '.95rem' }}>
          NID ভেরিফিকেশনে বিশ্বাসযোগ্যতা অর্জন করুন। সরাসরি বিক্রি করুন।
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 640, margin: '0 auto' }}>

          {/* Progress bar */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              {STEPS.map((s, i) => (
                <div key={s} style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', margin: '0 auto 6px',
                    background: i <= step ? 'linear-gradient(135deg, var(--terracotta), var(--deep-red))' : 'rgba(201,168,76,.15)',
                    border: `2px solid ${i <= step ? 'var(--terracotta)' : 'rgba(201,168,76,.3)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: i <= step ? 'white' : 'var(--worn-brown)',
                    fontSize: '.8rem', fontWeight: 700, transition: 'all .3s',
                  }}>{i < step ? '✓' : i + 1}</div>
                  <p style={{ fontSize: '.68rem', color: i <= step ? 'var(--terracotta)' : 'var(--worn-brown)', lineHeight: 1.3 }}>{s}</p>
                </div>
              ))}
            </div>
            <div style={{ height: 4, background: 'rgba(201,168,76,.2)', borderRadius: 2 }}>
              <div style={{
                height: '100%', borderRadius: 2,
                background: 'linear-gradient(to right, var(--terracotta), var(--deep-red))',
                width: `${(step / (STEPS.length - 1)) * 100}%`, transition: 'width .4s ease',
              }} />
            </div>
          </div>

          <div className="card" style={{ padding: '36px 40px' }}>

            {/* Step 0 — Personal info */}
            {step === 0 && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 24, color: 'var(--ink)' }}>
                  ব্যক্তিগত তথ্য
                </h2>
                <div className="form-group">
                  <label className="form-label">পূর্ণ নাম *</label>
                  <input className="form-input" placeholder="আপনার সম্পূর্ণ নাম লিখুন" value={form.name} onChange={e => update('name', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">মোবাইল নম্বর *</label>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <input className="form-input" placeholder="01XXXXXXXXX" value={form.phone} onChange={e => update('phone', e.target.value)} style={{ flex: 1 }} />
                    <button className="btn-primary" style={{ padding: '11px 18px', fontSize: '.82rem' }} onClick={sendOtp}>
                      OTP পাঠান
                    </button>
                  </div>
                  {otpSent && <p style={{ fontSize: '.78rem', color: '#05682c', marginTop: 6 }}>✓ OTP পাঠানো হয়েছে</p>}
                </div>
              </div>
            )}

            {/* Step 1 — NID */}
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>
                  NID যাচাই
                </h2>
                <p style={{ fontSize: '.88rem', color: 'var(--worn-brown)', marginBottom: 24, lineHeight: 1.8 }}>
                  প্রতারণা ঠেকাতে NID যাচাই বাধ্যতামূলক। আপনার তথ্য সম্পূর্ণ নিরাপদ।
                </p>
                <div className="form-group">
                  <label className="form-label">জাতীয় পরিচয়পত্র নম্বর (NID) *</label>
                  <input className="form-input" placeholder="আপনার ১৭ সংখ্যার NID নম্বর" value={form.nid} onChange={e => update('nid', e.target.value)} />
                </div>
                <div 
                  onClick={() => update('nidUploaded', true)}
                  style={{
                    background: form.nidUploaded ? 'rgba(0,160,60,0.08)' : 'rgba(201,168,76,.08)', 
                    border: `1.5px dashed ${form.nidUploaded ? '#05682c' : 'rgba(201,168,76,.4)'}`,
                    borderRadius: 6, padding: '20px', textAlign: 'center', cursor: 'pointer',
                    color: form.nidUploaded ? '#05682c' : 'var(--worn-brown)', fontSize: '.9rem',
                    fontWeight: form.nidUploaded ? 700 : 400
                  }}>
                  {form.nidUploaded ? '✓ NID_Front_Copy.jpg আপলোড সম্পন্ন হয়েছে' : '📷 NID-এর ছবি আপলোড করতে ক্লিক করুন (সামনের দিক)'}
                </div>
              </div>
            )}

            {/* Step 2 — OTP */}
            {step === 2 && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>
                  OTP যাচাই
                </h2>
                <p style={{ fontSize: '.88rem', color: 'var(--worn-brown)', marginBottom: 24 }}>
                  {form.phone || '01XXXXXXXXX'} নম্বরে পাঠানো ৬ সংখ্যার কোড লিখুন।
                </p>
                <div className="form-group">
                  <label className="form-label">OTP কোড *</label>
                  <input className="form-input" placeholder="_ _ _ _ _ _" value={form.otp}
                    onChange={e => update('otp', e.target.value)}
                    style={{ letterSpacing: 8, fontSize: '1.4rem', textAlign: 'center' }} maxLength={6} />
                </div>
                <button style={{ background: 'none', border: 'none', color: 'var(--gold-dark)', fontSize: '.82rem', cursor: 'pointer' }}>
                  কোড পাননি? পুনরায় পাঠান
                </button>
              </div>
            )}

            {/* Step 3 — Craft info */}
            {step === 3 && (
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 24, color: 'var(--ink)' }}>
                  শিল্পের তথ্য
                </h2>
                <div className="form-group">
                  <label className="form-label">শিল্পের ধরন *</label>
                  <select className="form-input" value={form.craft} onChange={e => update('craft', e.target.value)}>
                    <option value="">বেছে নিন…</option>
                    <option value="nakshi">নকশিকাঁথা</option>
                    <option value="tant">তাঁত শিল্প</option>
                    <option value="pottery">মৃৎশিল্প</option>
                    <option value="shital">শীতলপাটি</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">অঞ্চল *</label>
                  <input className="form-input" placeholder="আপনার জেলা/উপজেলা" value={form.region} onChange={e => update('region', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">অভিজ্ঞতা (বছরে) *</label>
                  <input type="number" className="form-input" placeholder="যেমন: ১৫" value={form.experience} onChange={e => update('experience', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">আপনার গল্প (বাংলায় লিখুন)</label>
                  <textarea className="form-input" rows={4} placeholder="আপনার শিল্পের সাথে পরিচয়, পরিবারের ইতিহাস, কেন এই কাজ করেন…"
                    value={form.story} onChange={e => update('story', e.target.value)} style={{ resize: 'vertical' }} />
                </div>
              </div>
            )}

            {/* Step 4 — Done */}
            {step === 4 && (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎉</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>
                  অভিনন্দন, {form.name || 'কারিগর'}!
                </h2>
                <p style={{ color: 'var(--worn-brown)', lineHeight: 1.9, marginBottom: 24 }}>
                  আপনার আবেদন সফলভাবে জমা হয়েছে। আমরা ২৪ ঘণ্টার মধ্যে NID ভেরিফাই করে
                  আপনার একাউন্ট সক্রিয় করব।
                </p>
                <div className="verified-badge" style={{ margin: '0 auto 24px', display: 'inline-flex', fontSize: '.9rem', padding: '8px 18px' }}>
                  ✓ আবেদন সফল — অপেক্ষায় থাকুন
                </div>
              </div>
            )}

            {/* Navigation */}
            {step < 4 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32, gap: 12 }}>
                {step > 0 && (
                  <button className="btn-outline" onClick={prev}>← পূর্ববর্তী</button>
                )}
                <button className="btn-primary" onClick={next} style={{ marginLeft: 'auto' }}>
                  {step === 3 ? 'জমা দিন ✓' : 'পরবর্তী →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
