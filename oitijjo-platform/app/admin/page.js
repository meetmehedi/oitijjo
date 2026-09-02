'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ARTISANS, PRODUCTS } from '../lib/data';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('verifications'); // 'verifications' | 'artisans' | 'escrow' | 'adduser'

  // Pending NID Verifications state
  const [pendingArtisans, setPendingArtisans] = useState([
    {
      id: 101,
      name: 'সুলতানা পারভীন',
      craft: 'nakshi',
      craftName: 'নকশিকাঁথা',
      region: 'জামালপুর সদর',
      phone: '01712-345678',
      nid: '19882691234567890',
      nidImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      appliedDate: '২ সেপ্টেম্বর, ২০২৬',
      otpVerified: true,
      status: 'pending', // 'pending' | 'approved' | 'rejected'
      years: 14,
      story: 'আমার মা এবং ঠাকুমার হাত ধরে নকশিকাঁথার সেলাই শিখেছি। সুই-সুতোই আমার জীবন ও জীবিকা।'
    },
    {
      id: 102,
      name: 'বিমল চন্দ্র পাল',
      craft: 'pottery',
      craftName: 'মৃৎশিল্প',
      region: 'ধামরাই, ঢাকা',
      phone: '01819-876543',
      nid: '19792699876543210',
      nidImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      appliedDate: '১ সেপ্টেম্বর, ২০২৬',
      otpVerified: true,
      status: 'pending',
      years: 25,
      story: 'ধামরাইয়ের প্রাচীন পালপাড়ায় আমাদের চার পুরুষের কুমারবাড়ি। ঐতিহ্যবাহী মাটির পাত্র বানাই।'
    },
    {
      id: 103,
      name: 'অমল বসাক',
      craft: 'tant',
      craftName: 'তাঁত শিল্প',
      region: 'পাথরাইল, টাঙ্গাইল',
      phone: '01911-223344',
      nid: '19842691122334455',
      nidImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      appliedDate: '৩১ আগস্ট, ২০২৬',
      otpVerified: true,
      status: 'pending',
      years: 20,
      story: 'হাতে বোনা সুতি ও সিল্কের টাঙ্গাইল শাড়ি তৈরি করি।'
    }
  ]);

  // Escrow Orders state
  const [escrowOrders, setEscrowOrders] = useState([
    {
      id: 'ORD-8821',
      customer: 'তানভীর আহমেদ (ঢাকা)',
      product: 'ময়ূরপঙ্খী লাল-সোনালি নকশিকাঁথা',
      artisan: 'রহিমা বেগম',
      amount: 3480,
      method: 'bKash (Escrow)',
      status: 'held', // 'held' | 'released' | 'refunded'
      date: '২ সেপ্টে, ২০২৬'
    },
    {
      id: 'ORD-8820',
      customer: 'নুসরাত জাহান (চট্টগ্রাম)',
      product: 'পাথরাইল খাঁটি টাঙ্গাইল সুতি তাঁতের শাড়ি',
      artisan: 'করিম বশাক',
      amount: 3680,
      method: 'Nagad (Escrow)',
      status: 'released',
      date: '১ সেপ্টে, ২০২৬'
    },
    {
      id: 'ORD-8819',
      customer: 'মাহমুদুল হাসান (সিলেট)',
      product: 'সোমপুর ও মহাস্থানগড় টেরাকোটা প্লেট',
      artisan: 'মণিন্দ্র পাল',
      amount: 1530,
      method: 'bKash (Escrow)',
      status: 'held',
      date: '১ সেপ্টে, ২০২৬'
    }
  ]);

  // New Artisan Add Form State
  const [newArtisan, setNewArtisan] = useState({
    name: '',
    craft: 'nakshi',
    region: '',
    phone: '',
    nid: '',
    years: '',
    story: ''
  });
  const [addSuccess, setAddSuccess] = useState(false);

  // Approve / Reject NID handler
  const handleNidStatus = (id, newStatus) => {
    setPendingArtisans(prev =>
      prev.map(a => a.id === id ? { ...a, status: newStatus } : a)
    );
  };

  // Release Escrow Handler
  const handleReleaseEscrow = (orderId) => {
    setEscrowOrders(prev =>
      prev.map(o => o.id === orderId ? { ...o, status: 'released' } : o)
    );
  };

  // Handle Add New User/Artisan
  const handleCreateArtisan = (e) => {
    e.preventDefault();
    if (!newArtisan.name || !newArtisan.phone || !newArtisan.nid) return;

    const added = {
      id: Date.now(),
      name: newArtisan.name,
      craft: newArtisan.craft,
      craftName: newArtisan.craft === 'nakshi' ? 'নকশিকাঁথা' : newArtisan.craft === 'tant' ? 'তাঁত শিল্প' : newArtisan.craft === 'pottery' ? 'মৃৎশিল্প' : 'শীতলপাটি',
      region: newArtisan.region || 'বাংলাদেশ',
      phone: newArtisan.phone,
      nid: newArtisan.nid,
      nidImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      appliedDate: 'আজ (অ্যাডমিন কর্তৃক যুক্ত)',
      otpVerified: true,
      status: 'approved',
      years: parseInt(newArtisan.years) || 10,
      story: newArtisan.story || 'ঐতিহ্যবাহী কারুশিল্পের সাথে যুক্ত।'
    };

    setPendingArtisans([added, ...pendingArtisans]);
    setAddSuccess(true);
    setNewArtisan({ name: '', craft: 'nakshi', region: '', phone: '', nid: '', years: '', story: '' });
    setTimeout(() => setAddSuccess(false), 4000);
  };

  const pendingCount = pendingArtisans.filter(a => a.status === 'pending').length;
  const heldEscrowCount = escrowOrders.filter(o => o.status === 'held').length;

  return (
    <>
      <Navbar />

      {/* Admin Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--ink) 0%, #3d2010 100%)',
        padding: '36px 0 28px',
        borderBottom: '2px solid var(--gold-dark)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '1.5rem' }}>🛡️</span>
                <h1 style={{ color: 'var(--gold-light)', fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>
                  অ্যাডমিন কন্ট্রোল প্যানেল
                </h1>
              </div>
              <p style={{ color: 'rgba(232,201,122,.75)', fontSize: '.9rem', marginTop: 4 }}>
                NID ও OTP যাচাইকরণ, কারিগর অনুমোদন ও এসক্রো ফান্ড রিলিজ ড্যাশবোর্ড
              </p>
            </div>
            <Link href="/" className="btn-outline" style={{ color: 'var(--gold-light)', borderColor: 'var(--gold)' }}>
              ← ওয়েবসাইটে ফিরে যান
            </Link>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--parchment)', minHeight: '80vh', padding: '40px 0' }}>
        <div className="container">
          
          {/* Quick Metrics Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 36 }}>
            <div className="card" style={{ padding: '20px 24px', borderLeft: '4px solid var(--terracotta)' }}>
              <p style={{ fontSize: '.82rem', color: 'var(--worn-brown)', textTransform: 'uppercase', fontWeight: 600 }}>যাচাই অপেক্ষমান (Pending NID)</p>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--terracotta)', fontWeight: 800, margin: '6px 0' }}>{pendingCount} জন</h3>
              <p style={{ fontSize: '.78rem', color: '#05682c' }}>✓ মোবাইল OTP পরীক্ষিত</p>
            </div>

            <div className="card" style={{ padding: '20px 24px', borderLeft: '4px solid #05682c' }}>
              <p style={{ fontSize: '.82rem', color: 'var(--worn-brown)', textTransform: 'uppercase', fontWeight: 600 }}>অনুমোদিত কারিগর (Approved)</p>
              <h3 style={{ fontSize: '1.8rem', color: '#05682c', fontWeight: 800, margin: '6px 0' }}>{ARTISANS.length + pendingArtisans.filter(a => a.status === 'approved').length} জন</h3>
              <p style={{ fontSize: '.78rem', color: 'var(--worn-brown)' }}>৮টি জেলায় সক্রিয়</p>
            </div>

            <div className="card" style={{ padding: '20px 24px', borderLeft: '4px solid var(--gold-dark)' }}>
              <p style={{ fontSize: '.82rem', color: 'var(--worn-brown)', textTransform: 'uppercase', fontWeight: 600 }}>এসক্রো ব্যালেন্স (Held)</p>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', fontWeight: 800, margin: '6px 0' }}>
                ৳{escrowOrders.filter(o => o.status === 'held').reduce((s, o) => s + o.amount, 0).toLocaleString()}
              </h3>
              <p style={{ fontSize: '.78rem', color: 'var(--terracotta)' }}>{heldEscrowCount}টি অর্ডার ডেলিভারির অপেক্ষায়</p>
            </div>

            <div className="card" style={{ padding: '20px 24px', borderLeft: '4px solid var(--ink)' }}>
              <p style={{ fontSize: '.82rem', color: 'var(--worn-brown)', textTransform: 'uppercase', fontWeight: 600 }}>মোট পণ্য (Active Products)</p>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', fontWeight: 800, margin: '6px 0' }}>{PRODUCTS.length}টি</h3>
              <p style={{ fontSize: '.78rem', color: 'var(--worn-brown)' }}>৪টি হেরিটেজ ক্যাটাগরি</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', borderBottom: '2px solid rgba(201,168,76,0.3)', paddingBottom: 14, marginBottom: 30 }}>
            <button
              onClick={() => setActiveTab('verifications')}
              className={`filter-btn ${activeTab === 'verifications' ? 'active' : ''}`}
              style={{ fontSize: '.9rem', padding: '9px 20px' }}
            >
              📋 NID যাচাই কিউ ({pendingCount})
            </button>
            <button
              onClick={() => setActiveTab('escrow')}
              className={`filter-btn ${activeTab === 'escrow' ? 'active' : ''}`}
              style={{ fontSize: '.9rem', padding: '9px 20px' }}
            >
              🔒 এসক্রো পেমেন্ট পর্যবেক্ষণ ({heldEscrowCount})
            </button>
            <button
              onClick={() => setActiveTab('adduser')}
              className={`filter-btn ${activeTab === 'adduser' ? 'active' : ''}`}
              style={{ fontSize: '.9rem', padding: '9px 20px' }}
            >
              ➕ নতুন কারিগর/ইউজার যোগ করুন
            </button>
            <button
              onClick={() => setActiveTab('artisans')}
              className={`filter-btn ${activeTab === 'artisans' ? 'active' : ''}`}
              style={{ fontSize: '.9rem', padding: '9px 20px' }}
            >
              👩‍🎨 বর্তমান কারিগর তালিকা
            </button>
          </div>

          {/* TAB 1: NID Verification Queue */}
          {activeTab === 'verifications' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)' }}>
                  আবেদনকারী কারিগরদের NID ও তথ্যাদি যাচাইকরণ
                </h2>
                <span style={{ fontSize: '.85rem', color: 'var(--worn-brown)' }}>
                  মোট আবেদন: {pendingArtisans.length}টি
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {pendingArtisans.map((artisan) => (
                  <div key={artisan.id} className="card" style={{ padding: '24px 28px', borderLeft: `6px solid ${artisan.status === 'approved' ? '#05682c' : artisan.status === 'rejected' ? '#8b1a1a' : 'var(--gold)'}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <img 
                          src={artisan.nidImage} 
                          alt={artisan.name} 
                          style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)' }} 
                        />
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{artisan.name}</h3>
                            {artisan.status === 'approved' && <span className="verified-badge">✓ অনুমোদিত (Verified)</span>}
                            {artisan.status === 'rejected' && <span style={{ background: 'rgba(139,26,26,0.1)', color: '#8b1a1a', padding: '2px 8px', borderRadius: 12, fontSize: '.72rem', fontWeight: 700 }}>✕ প্রত্যাখ্যাত</span>}
                            {artisan.status === 'pending' && <span style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-dark)', padding: '2px 8px', borderRadius: 12, fontSize: '.72rem', fontWeight: 700 }}>⏳ যাচাই অপেক্ষমান</span>}
                          </div>
                          <p style={{ fontSize: '.85rem', color: 'var(--terracotta)', fontWeight: 600, marginTop: 3 }}>
                            {artisan.craftName} · {artisan.region} · অভিজ্ঞতা: {artisan.years} বছর
                          </p>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '.8rem', color: 'var(--worn-brown)' }}>আবেদনের তারিখ: {artisan.appliedDate}</span>
                        <div style={{ marginTop: 4 }}>
                          <span style={{ fontSize: '.78rem', background: '#e8f5e9', color: '#2e7d32', padding: '3px 8px', borderRadius: 4, fontWeight: 600 }}>
                            📱 OTP ভেরিফায়েড: {artisan.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Verification Details Box */}
                    <div style={{ background: 'var(--parchment-dark)', padding: '16px 20px', borderRadius: 6, marginBottom: 18 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                        <div>
                          <strong style={{ fontSize: '.82rem', color: 'var(--worn-brown)', display: 'block' }}>জাতীয় পরিচয়পত্র নম্বর (NID)</strong>
                          <span style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--ink)' }}>{artisan.nid}</span>
                        </div>
                        <div>
                          <strong style={{ fontSize: '.82rem', color: 'var(--worn-brown)', display: 'block' }}>NID কার্ডের ছবি (Scan/Photo)</strong>
                          <span style={{ fontSize: '.88rem', color: '#05682c', fontWeight: 600 }}>✓ NID_Front_Scan.jpg (স্পষ্ট)</span>
                        </div>
                        <div>
                          <strong style={{ fontSize: '.82rem', color: 'var(--worn-brown)', display: 'block' }}>শিল্পীর গল্প ও উদ্দেশ্য</strong>
                          <span style={{ fontSize: '.85rem', color: 'var(--ink-light)', fontStyle: 'italic' }}>"{artisan.story}"</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Controls */}
                    {artisan.status === 'pending' && (
                      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => handleNidStatus(artisan.id, 'rejected')}
                          style={{
                            background: 'transparent',
                            color: '#8b1a1a',
                            border: '1.5px solid #8b1a1a',
                            padding: '8px 18px',
                            borderRadius: 4,
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '.85rem'
                          }}
                        >
                          ✕ বাতিল করুন
                        </button>
                        <button
                          onClick={() => handleNidStatus(artisan.id, 'approved')}
                          className="btn-primary"
                          style={{
                            background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
                            padding: '8px 22px',
                            fontSize: '.85rem'
                          }}
                        >
                          ✓ NID অনুমোদন করুন (Approve)
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Escrow Management */}
          {activeTab === 'escrow' && (
            <div>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)' }}>
                  এসক্রো (Escrow) পেমেন্ট ট্র্যাকিং ও ফান্ড রিলিজ
                </h2>
                <p style={{ fontSize: '.88rem', color: 'var(--worn-brown)' }}>
                  ক্রেতা পণ্য বুঝে পাওয়ার পর এবং সন্তুষ্টি প্রকাশ করলে কারিগরের ব্যাংক/বিকাশ অ্যাকাউন্টে টাকা রিলিজ করা হয়।
                </p>
              </div>

              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '.9rem' }}>
                  <thead style={{ background: 'var(--parchment-dark)', borderBottom: '2px solid rgba(201,168,76,0.3)' }}>
                    <tr>
                      <th style={{ padding: '14px 18px' }}>অর্ডার আইডি</th>
                      <th style={{ padding: '14px 18px' }}>ক্রেতার নাম</th>
                      <th style={{ padding: '14px 18px' }}>পণ্য ও কারিগর</th>
                      <th style={{ padding: '14px 18px' }}>টাকার পরিমাণ</th>
                      <th style={{ padding: '14px 18px' }}>পদ্ধতি</th>
                      <th style={{ padding: '14px 18px' }}>এসক্রো স্ট্যাটাস</th>
                      <th style={{ padding: '14px 18px', textAlign: 'right' }}>পদক্ষেপ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {escrowOrders.map((order) => (
                      <tr key={order.id} style={{ borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
                        <td style={{ padding: '16px 18px', fontWeight: 700 }}>{order.id}</td>
                        <td style={{ padding: '16px 18px' }}>{order.customer}</td>
                        <td style={{ padding: '16px 18px' }}>
                          <span style={{ fontWeight: 600, display: 'block', color: 'var(--ink)' }}>{order.product}</span>
                          <span style={{ fontSize: '.8rem', color: 'var(--worn-brown)' }}>কারিগর: {order.artisan}</span>
                        </td>
                        <td style={{ padding: '16px 18px', fontWeight: 700, color: 'var(--terracotta)' }}>
                          ৳{order.amount.toLocaleString()}
                        </td>
                        <td style={{ padding: '16px 18px', fontSize: '.85rem' }}>{order.method}</td>
                        <td style={{ padding: '16px 18px' }}>
                          {order.status === 'held' ? (
                            <span style={{ background: '#fff3e0', color: '#e65100', padding: '4px 10px', borderRadius: 20, fontSize: '.78rem', fontWeight: 700 }}>
                              🔒 এসক্রো রিজার্ভে আছে
                            </span>
                          ) : (
                            <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '4px 10px', borderRadius: 20, fontSize: '.78rem', fontWeight: 700 }}>
                              ✓ কারিগরের কাছে রিলিজড
                            </span>
                          )}
                        </td>
                        <td style={{ padding: '16px 18px', textAlign: 'right' }}>
                          {order.status === 'held' ? (
                            <button
                              onClick={() => handleReleaseEscrow(order.id)}
                              className="btn-primary"
                              style={{ padding: '6px 14px', fontSize: '.8rem' }}
                            >
                              টাকা রিলিজ করুন →
                            </button>
                          ) : (
                            <span style={{ fontSize: '.8rem', color: '#05682c', fontWeight: 600 }}>পরিশোধিত</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: Add New User / Artisan */}
          {activeTab === 'adduser' && (
            <div style={{ maxWidth: 700, margin: '0 auto' }}>
              <div className="card" style={{ padding: '36px 40px' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
                  অ্যাডমিন কর্তৃক নতুন কারিগর বা ব্যবহারকারী নিবন্ধন
                </h2>
                <p style={{ fontSize: '.88rem', color: 'var(--worn-brown)', marginBottom: 24, lineHeight: 1.6 }}>
                  ফিল্ড অফিসার বা অ্যাডমিন সরাসরি যেকোনো হস্তশিল্পীর NID ও তথ্য যাচাই করে প্ল্যাটফর্মে যুক্ত করতে পারেন।
                </p>

                {addSuccess && (
                  <div style={{ background: '#e8f5e9', border: '1px solid #a5d6a7', color: '#1b5e20', padding: '14px 18px', borderRadius: 6, marginBottom: 24, fontSize: '.9rem', fontWeight: 600 }}>
                    ✓ নতুন কারিগর সফলভাবে যাচাই ও তালিকাভুক্ত হয়েছেন!
                  </div>
                )}

                <form onSubmit={handleCreateArtisan}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label htmlFor="adm_name" className="form-label">কারিগরের পূর্ণ নাম *</label>
                      <input 
                        required
                        id="adm_name"
                        name="adm_name"
                        className="form-input" 
                        placeholder="যেমন: মনিকা রায়" 
                        value={newArtisan.name}
                        onChange={e => setNewArtisan({ ...newArtisan, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="adm_craft" className="form-label">হস্তশিল্পের ধরন *</label>
                      <select 
                        id="adm_craft"
                        name="adm_craft"
                        className="form-input"
                        value={newArtisan.craft}
                        onChange={e => setNewArtisan({ ...newArtisan, craft: e.target.value })}
                      >
                        <option value="nakshi">নকশিকাঁথা (Nakshi Kantha)</option>
                        <option value="tant">তাঁত শিল্প (Tangail Saree)</option>
                        <option value="pottery">মৃৎশিল্প (Pottery / Terracotta)</option>
                        <option value="shital">শীতলপাটি (Shital Pati)</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label htmlFor="adm_phone" className="form-label">মোবাইল নম্বর (OTP যাচাইকৃত) *</label>
                      <input 
                        required
                        id="adm_phone"
                        name="adm_phone"
                        type="tel"
                        className="form-input" 
                        placeholder="01XXXXXXXXX" 
                        value={newArtisan.phone}
                        onChange={e => setNewArtisan({ ...newArtisan, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="adm_nid" className="form-label">জাতীয় পরিচয়পত্র (NID) নম্বর *</label>
                      <input 
                        required
                        id="adm_nid"
                        name="adm_nid"
                        className="form-input" 
                        placeholder="১০ বা ১৭ সংখ্যার NID" 
                        value={newArtisan.nid}
                        onChange={e => setNewArtisan({ ...newArtisan, nid: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label htmlFor="adm_region" className="form-label">জেলা / অঞ্চল *</label>
                      <input 
                        required
                        id="adm_region"
                        name="adm_region"
                        className="form-input" 
                        placeholder="যেমন: জামালপুর / টাঙ্গাইল" 
                        value={newArtisan.region}
                        onChange={e => setNewArtisan({ ...newArtisan, region: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="adm_years" className="form-label">কাজের অভিজ্ঞতা (বছর)</label>
                      <input 
                        id="adm_years"
                        name="adm_years"
                        type="number"
                        className="form-input" 
                        placeholder="যেমন: ১৫" 
                        value={newArtisan.years}
                        onChange={e => setNewArtisan({ ...newArtisan, years: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="adm_story" className="form-label">কারিগরের জীবনগাথা ও পটভূমি</label>
                    <textarea 
                      id="adm_story"
                      name="adm_story"
                      rows={3}
                      className="form-input" 
                      placeholder="শিল্পীর গল্প, কীভাবে কাজ শুরু করেছেন..." 
                      value={newArtisan.story}
                      onChange={e => setNewArtisan({ ...newArtisan, story: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', marginTop: 10 }}>
                    ✓ নতুন কারিগর অনুমোদন ও যুক্ত করুন
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 4: Active Artisans List */}
          {activeTab === 'artisans' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)' }}>
                  নিবন্ধিত ও ভেরিফায়েড কারিগর তালিকা
                </h2>
                <button onClick={() => setActiveTab('adduser')} className="btn-primary" style={{ padding: '8px 16px', fontSize: '.85rem' }}>
                  + নতুন কারিগর যোগ করুন
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                {ARTISANS.map((a) => (
                  <div key={a.id} className="card" style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 12 }}>
                      <img src={a.avatar} alt={a.name} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold)' }} />
                      <div>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{a.name}</h4>
                        <p style={{ fontSize: '.78rem', color: 'var(--terracotta)', margin: 0, fontWeight: 600 }}>{a.region}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: '.82rem', color: 'var(--worn-brown)', lineHeight: 1.5, marginBottom: 14 }}>
                      {a.story.slice(0, 85)}...
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: 10, fontSize: '.78rem' }}>
                      <span className="verified-badge">✓ NID ভেরিফায়েড</span>
                      <span style={{ color: 'var(--gold-dark)', fontWeight: 700 }}>★ {a.rating} ({a.salesCount}টি বিক্রি)</span>
                    </div>
                  </div>
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
