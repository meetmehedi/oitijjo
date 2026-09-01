'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', subject: 'সাধারণ জিজ্ঞাসা' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && (form.phone || form.email)) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ background: 'linear-gradient(135deg, var(--ink), #3d2010)', padding: '56px 0 44px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, marginBottom: 8 }}>
          যোগাযোগ করুন
        </h1>
        <p style={{ color: 'rgba(232,201,122,.75)', fontSize: '.95rem' }}>
          যেকোনো প্রশ্ন, কাস্টম অর্ডার বা সহায়তার জন্য আমাদের সাথে কথা বলুন
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="ornament">✦ ✦ ✦</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 36, alignItems: 'start' }} className="two-col-grid">
            {/* Contact Form */}
            <div className="card" style={{ padding: '36px 32px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: 12 }}>✉️</div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--ink)', fontWeight: 700, marginBottom: 8 }}>
                    বার্তা সফলভাবে পাঠানো হয়েছে!
                  </h3>
                  <p style={{ color: 'var(--worn-brown)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                    ধন্যবাদ {form.name}। আমাদের প্রতিনিধি অতি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '', subject: 'সাধারণ জিজ্ঞাসা' }); }}
                    className="btn-outline" 
                    style={{ marginTop: 20 }}
                  >
                    আরেকটি বার্তা পাঠান
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 20 }}>
                    আমাদের বার্তা পাঠান
                  </h3>
                  
                  <div className="form-group">
                    <label className="form-label">আপনার নাম *</label>
                    <input 
                      required 
                      className="form-input" 
                      placeholder="পুরো নাম" 
                      value={form.name} 
                      onChange={e => setForm({ ...form, name: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">মোবাইল নম্বর *</label>
                    <input 
                      required 
                      className="form-input" 
                      placeholder="01XXXXXXXXX" 
                      value={form.phone} 
                      onChange={e => setForm({ ...form, phone: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">বিষয়</label>
                    <select 
                      className="form-input"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                    >
                      <option value="সাধারণ জিজ্ঞাসা">সাধারণ জিজ্ঞাসা</option>
                      <option value="অর্ডার ও ডেলিভারি সহায়তা">অর্ডার ও ডেলিভারি সহায়তা</option>
                      <option value="কারিগর হিসেবে সহায়তা">কারিগর হিসেবে সহায়তা</option>
                      <option value="কাস্টম নকশা অর্ডার">কাস্টম নকশা অর্ডার</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">আপনার বার্তা / প্রশ্ন *</label>
                    <textarea 
                      required 
                      rows={4} 
                      className="form-input" 
                      placeholder="এখানে বিস্তারিত লিখুন..." 
                      value={form.message} 
                      onChange={e => setForm({ ...form, message: e.target.value })} 
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
                    বার্তা পাঠান ✉
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Info */}
            <div>
              <div className="card" style={{ padding: '28px 24px', marginBottom: 20 }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>
                  অফিস ও যোগাযোগ কেন্দ্র
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--worn-brown)', lineHeight: 1.8, marginBottom: 14 }}>
                  📍 <strong>প্রধান কার্যালয়:</strong> বাড়ি ১২, রোড ৫, ধানমন্ডি, ঢাকা - ১২০৫<br />
                  📞 <strong>হটলাইন:</strong> +880 1700-000000 (সকাল ৯টা - রাত ৮টা)<br />
                  📧 <strong>ইমেইল:</strong> support@oitijjo.com.bd
                </p>
                <div style={{ background: 'rgba(201,168,76,0.1)', padding: '12px 16px', borderRadius: '6px', fontSize: '0.82rem', color: 'var(--ink-light)' }}>
                  🌾 <strong>কারিগর সাপোর্ট হেল্পডেস্ক:</strong> গ্রামীণ কারিগরদের ডিজিটাল অনবোর্ডিংয়ের জন্য বিশেষ সার্বক্ষণিক সহায়তা টিম।
                </div>
              </div>

              <div className="card" style={{ padding: '24px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(192,82,43,0.08))' }}>
                <h4 style={{ color: 'var(--ink)', fontWeight: 700, marginBottom: 6 }}>জরুরি সহায়তা প্রয়োজন?</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--worn-brown)', marginBottom: 14 }}>আমাদের হোয়াটসঅ্যাপে সরাসরি টেক্সট করতে পারেন</p>
                <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-flex', padding: '8px 18px', fontSize: '0.85rem' }}>
                  💬 হোয়াটসঅ্যাপ চ্যাট
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
