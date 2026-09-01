import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div style={{ background: 'linear-gradient(135deg, var(--ink), #3d2010)', padding: '56px 0 44px', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚜</div>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, marginBottom: 8 }}>
          আমাদের সম্পর্কে
        </h1>
        <p style={{ color: 'rgba(232,201,122,.75)', fontSize: '.95rem', maxWidth: 580, margin: '0 auto' }}>
          বাংলাদেশের বিলুপ্তপ্রায় ঐতিহ্যবাহী লোকশিল্প সংরক্ষণ এবং গ্রামীণ কারিগরদের অর্থনৈতিক ক্ষমতায়নে একটি সমন্বিত উদ্যোগ।
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="ornament">✦ ✦ ✦</div>

          <div className="card" style={{ padding: '36px 40px', marginBottom: 36 }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--ink)', fontWeight: 700, marginBottom: 16 }}>
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </h2>
            <p style={{ color: 'var(--ink-light)', lineHeight: 1.9, marginBottom: 18 }}>
              বাংলাদেশ হাজার বছরের সমৃদ্ধ শিল্প ও সংস্কৃতির দেশ। নকশিকাঁথা, তাঁতের শাড়ি, মৃৎশিল্প এবং ইউনেস্কো স্বীকৃত শীতলপাটির মতো অমূল্য ঐতিহ্য প্রজন্ম থেকে প্রজন্মে আমাদের পরিচয় বহন করে আসছে। কিন্তু আধুনিকতার যুগে মধ্যস্থভোগীদের দৌরাত্ম্য এবং ডিজিটাল সংযোগের অভাবে আমাদের প্রকৃত কারিগররা ন্যায্য মূল্য থেকে বঞ্চিত হচ্ছেন।
            </p>
            <p style={{ color: 'var(--ink-light)', lineHeight: 1.9 }}>
              <strong>‘ঐতিজ্জ্বো’ (Oitijjo)</strong> প্ল্যাটফর্মের মূল লক্ষ্য হলো প্রযুক্তির মাধ্যমে গ্রামীণ প্রান্তিক কারিগর এবং সচেতন ক্রেতাদের মাঝে সরাসরি সেতুবন্ধন রচনা করা, যাতে প্রতিটি পণ্য তার যথাযথ মর্যাদা পায় এবং কারিগররা স্বাবলম্বী হতে পারেন।
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 36 }}>
            {[
              { icon: '🤝', title: 'সরাসরি সংযোগ', desc: 'কোনো তৃতীয় পক্ষ ছাড়া সরাসরি কারিগরের কাছ থেকে ন্যায্যমূল্যে পণ্য কেনা।' },
              { icon: '🛡️', title: 'এসক্রো নিরাপত্তা', desc: 'পণ্য হাতে পেয়ে যাচাই করার পরেই কারিগরের কাছে টাকা পৌঁছে দেওয়া।' },
              { icon: '📜', title: 'ঐতিহ্যের সংরক্ষণ', desc: 'প্রতিটি পণ্যের পেছনের লোকগাথা, তৈরি প্রক্রিয়া ও ইতিহাস সংরক্ষণ করা।' },
            ].map(f => (
              <div key={f.title} className="card" style={{ padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: 10 }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--worn-brown)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: '36px 40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(192,82,43,0.08))' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 12 }}>
              ঐতিহ্য পরিবারের অংশ হোন
            </h3>
            <p style={{ color: 'var(--worn-brown)', maxWidth: 520, margin: '0 auto 24px', lineHeight: 1.8, fontSize: '0.9rem' }}>
              আপনি কি একজন খাঁটি কারুশিল্পের অনুরাগী অথবা গ্রামীণ কারিগর? আমাদের সাথে যুক্ত হয়ে ঐতিহ্য রক্ষায় ভূমিকা রাখুন।
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/shop" className="btn-primary">পণ্য সংগ্রহ করুন</Link>
              <Link href="/become-artisan" className="btn-outline">কারিগর নিবন্ধন করুন</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
