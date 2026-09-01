'use client';
import { useState } from 'react';

export default function ArtisanMessageModal({ artisanName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (msg.trim() && senderPhone.trim()) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setIsOpen(false);
        setMsg('');
        setSenderPhone('');
      }, 2500);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="btn-primary" 
        style={{ width: '100%', justifyContent: 'center' }}
      >
        ✉ মেসেজ পাঠান
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(44, 26, 14, 0.75)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div className="card" style={{ maxWidth: 460, width: '100%', padding: '32px 28px', position: 'relative' }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: 14, right: 16,
                background: 'none', border: 'none', fontSize: '1.2rem',
                color: 'var(--ink)', cursor: 'pointer'
              }}
            >
              ✕
            </button>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 10 }}>🕊️</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>
                  বার্তা পাঠানো হয়েছে!
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--worn-brown)', lineHeight: 1.6 }}>
                  {artisanName}-এর কাছে আপনার বার্তা পৌঁছে গেছে। তিনি শীঘ্রই আপনার নম্বরে যোগাযোগ করবেন।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSend}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontSize: '1.4rem' }}>💬</span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>
                    {artisanName}-কে বার্তা পাঠান
                  </h3>
                </div>
                
                <div className="form-group" style={{ marginBottom: 14 }}>
                  <label className="form-label" style={{ fontSize: '0.84rem' }}>আপনার মোবাইল নম্বর *</label>
                  <input 
                    required 
                    className="form-input" 
                    placeholder="01XXXXXXXXX" 
                    value={senderPhone} 
                    onChange={e => setSenderPhone(e.target.value)} 
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 18 }}>
                  <label className="form-label" style={{ fontSize: '0.84rem' }}>বার্তা বা কাস্টম অর্ডারের বিবরণ *</label>
                  <textarea 
                    required 
                    rows={4} 
                    className="form-input" 
                    placeholder="যেমন: সাইজ, পছন্দের রং বা বিশেষ অনুরোধ..." 
                    value={msg} 
                    onChange={e => setMsg(e.target.value)} 
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  সরাসরি পাঠিয়ে দিন 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
