'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQS = [
  {
    q: 'এসক্রো (Escrow) পেমেন্ট কী এবং এটি কীভাবে কাজ করে?',
    a: 'এসক্রো পেমেন্টে আপনার প্রদানকৃত টাকা সরাসরি বিক্রেতার কাছে না গিয়ে ঐতিজ্জ্বো-এর নিরাপদ ট্রাস্ট অ্যাকাউন্টে জমা থাকে। পণ্য ডেলিভারি পেয়ে আপনি সন্তুষ্ট হওয়ার পর কারিগরের অ্যাকাউন্টে অর্থ ছাড় দেওয়া হয়।'
  },
  {
    q: 'পণ্যগুলো কি সত্যিই খাঁটি ও হস্তনির্মিত?',
    a: 'হ্যাঁ, ঐতিজ্জ্বো প্ল্যাটফর্মের প্রতিটি পণ্য আমাদের মাঠপর্যায়ের দল এবং জাতীয় পরিচয়পত্র (NID) ভেরিফাইড কারিগরদের দ্বারা শতভাগ হাতে তৈরি।'
  },
  {
    q: 'ডেলিভারি পেতে কতদিন সময় লাগে?',
    a: 'যেহেতু অনেক পণ্য অর্ডার অনুযায়ী নতুনভাবে তৈরি করা হয়, তাই রেডি পণ্য ৩-৫ কার্যদিবসে এবং কাস্টম সাইজের পণ্য ৭-১০ কার্যদিবসে সুন্দরবন বা পাঠাও কুরিয়ারের মাধ্যমে পৌঁছে দেওয়া হয়।'
  },
  {
    q: 'পণ্য পছন্দ না হলে কি রিটার্ন করা যাবে?',
    a: 'হ্যাঁ! পণ্য গ্রহণের ৭ দিনের মধ্যে যদি কোনো ত্রুটি পাওয়া যায় বা পণ্যের সাথে বর্ণনার অমিল থাকে, তবে সম্পূর্ণ বিনামূল্যে রিটার্ন ও রিফান্ড সুবিধা রয়েছে।'
  },
  {
    q: 'আমি একজন কারিগর, কীভাবে এখানে পণ্য বিক্রি করব?',
    a: 'আমাদের "কারিগর হিসেবে যোগ দিন" পেজে গিয়ে আপনার নাম, ফোন নম্বর ও জাতীয় পরিচয়পত্র (NID) দিয়ে খুব সহজেই আবেদন করতে পারেন। আমাদের টিম ২৪ ঘণ্টার মধ্যে সহায়তা করবে।'
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <Navbar />

      <div style={{ background: 'linear-gradient(135deg, var(--ink), #3d2010)', padding: '56px 0 44px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, marginBottom: 8 }}>
          সাধারণ জিজ্ঞাসা (FAQ)
        </h1>
        <p style={{ color: 'rgba(232,201,122,.75)', fontSize: '.95rem' }}>
          ঐতিজ্জ্বো প্ল্যাটফর্ম ব্যবহারের নিয়মাবলী ও নিরাপত্তা সংক্রান্ত তথ্য
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="ornament">✦ ✦ ✦</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map((faq, i) => (
              <div 
                key={i} 
                className="card" 
                style={{ padding: '20px 24px', cursor: 'pointer' }}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>
                    {faq.q}
                  </h3>
                  <span style={{ fontSize: '1.2rem', color: 'var(--terracotta)', fontWeight: 700, marginLeft: 12 }}>
                    {openIdx === i ? '−' : '+'}
                  </span>
                </div>
                {openIdx === i && (
                  <p style={{ marginTop: 14, color: 'var(--ink-light)', lineHeight: 1.8, fontSize: '0.92rem', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: 12 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
