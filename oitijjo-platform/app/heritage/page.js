import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HERITAGE = [
  {
    id: 'nakshi', icon: '🪡', name: 'নকশিকাঁথা', nameEn: 'Nakshi Kantha',
    era: 'আনু. ১৫শ–১৬শ শতক', years: '৫০০+', artisans: 'লক্ষাধিক', time: '২–৬ মাস',
    unesco: false,
    desc: 'বাংলা শব্দ "নকশা" থেকে এর নামকরণ। পুরনো শাড়ি ও কাপড় জোড়া দিয়ে "রানিং স্টিচ" পদ্ধতিতে রঙিন নকশা তৈরি করা হয়। বাংলার গ্রামীণ নারীদের শতবর্ষী শিল্পকলা।',
    regions: ['ময়মনসিংহ', 'জামালপুর', 'রাজশাহী', 'ফরিদপুর', 'যশোর'],
    quote: 'প্রতিটি সুতোর বুননে মিশে থাকে গ্রামীণ নারীর স্বপ্ন, অগণিত নির্ঘুম রাত আর ভালোবাসার অপরিসীম ছাপ।',
  },
  {
    id: 'shital', icon: '🌿', name: 'শীতলপাটি', nameEn: 'Shital Pati',
    era: 'শতাব্দীপ্রাচীন', years: 'শতাব্দী+', artisans: 'হাজারো', time: '২–৪ সপ্তাহ',
    unesco: true, unescoYear: '২০১৭',
    desc: 'মুর্তা গাছ (Schumannianthus dichotomus) থেকে বেতি বানিয়ে সম্পূর্ণ হাতে বোনা। প্রাকৃতিকভাবে ঠান্ডা এই পাটি জমিদার ও রাজপরিবারে বিশেষ মর্যাদা পেত।',
    regions: ['সিলেট', 'সুনামগঞ্জ', 'বরিশাল', 'নোয়াখালী', 'টাঙ্গাইল'],
    quote: 'গরমের দুপুরে শীতলপাটিতে শুয়ে থাকার সেই অনুভূতি কোনো শীতাতপনিয়ন্ত্রণ যন্ত্র দিতে পারে না।',
  },
  {
    id: 'pottery', icon: '🏺', name: 'মৃৎশিল্প', nameEn: 'Pottery',
    era: '৩০০ খ্রিস্টপূর্বাব্দ', years: '২০০০+', artisans: 'কুমার/পাল সম্প্রদায়', time: '৩–৭ দিন',
    unesco: false,
    desc: 'মহাস্থানগড়, পাহাড়পুর, ময়নামতির খননে মাটির পাত্র পাওয়া গেছে। মুঘল যুগে রায়েরবাজার (কুমারটুলি) রাজকীয় পৃষ্ঠপোষকতা পেয়েছিল।',
    regions: ['রায়েরবাজার (ঢাকা)', 'বগুড়া', 'কুমিল্লা', 'রাজশাহী'],
    quote: 'মাটির প্রতিটি পাত্র আসলে একটি দর্পণ — যেখানে দেখা যায় হাজার বছরের সভ্যতার মুখ।',
  },
  {
    id: 'tant', icon: '🧶', name: 'তাঁত শিল্প', nameEn: 'Tant Weaving',
    era: '১৫শ শতক', years: '৬০০+', artisans: 'লক্ষাধিক', time: '৩–১৪ দিন',
    unesco: true, unescoYear: '২০২৫',
    desc: '"তন্তু" (সুতো) থেকে তাঁত শব্দের উৎপত্তি। বসাক সম্প্রদায় মসলিন তাঁতিদেরই বংশধর। UNESCO স্বীকৃত টাঙ্গাইলের শাড়িতে রাজমহল, ভোমরা, নীলাম্বরীর নকশা।',
    regions: ['টাঙ্গাইল', 'নাগরপুর', 'কালিহাতী', 'বাসাইল'],
    quote: 'তাঁতের মাকুর শব্দ শুনলে মনে হয় — এ যেন সময়ের হৃদস্পন্দন।',
  },
];

export default function HeritagePage() {
  return (
    <>
      <Navbar />

      <div style={{ background: 'linear-gradient(135deg, var(--ink), #3d2010)', padding: '56px 0 44px', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚜</div>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, marginBottom: 8 }}>
          রাজকীয় ঐতিহ্যের ইতিহাস
        </h1>
        <p style={{ color: 'rgba(232,201,122,.65)', fontSize: '.95rem', maxWidth: 520, margin: '0 auto' }}>
          বাংলার চার ঐতিহ্যবাহী শিল্পের পেছনের ইতিহাস, নির্মাণ পদ্ধতি ও কারিগরদের জীবনগাথা
        </p>
      </div>

      <section className="section">
        <div className="container">
          {HERITAGE.map((h, idx) => (
            <div key={h.id} style={{ marginBottom: 64 }}>
              <div className="ornament">✦ ✦ ✦</div>

              <div className="card" style={{ overflow: 'hidden' }}>
                {/* Corner ornaments */}
                <span style={{ position: 'absolute', top: 8, left: 8, fontSize: '1.6rem', color: 'var(--gold-dark)', opacity: .5, zIndex: 1 }}>❧</span>
                <span style={{ position: 'absolute', top: 8, right: 8, fontSize: '1.6rem', color: 'var(--gold-dark)', opacity: .5, zIndex: 1 }}>❧</span>

                {/* Header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  background: 'linear-gradient(135deg, var(--ink), var(--ink-light), #3d2010)',
                  padding: '28px 40px',
                }}>
                  <div style={{ fontSize: '3rem', animation: 'pulse-icon 3s ease-in-out infinite' }}>{h.icon}</div>
                  <div>
                    <h2 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 700 }}>{h.name}</h2>
                    <p style={{ color: 'rgba(232,201,122,.6)', fontSize: '.82rem', letterSpacing: 3, marginTop: 4 }}>
                      {h.nameEn} · {h.era}
                      {h.unesco && (
                        <span style={{ marginLeft: 10, background: 'rgba(0,120,255,.2)', color: '#6bb3ff', padding: '2px 8px', borderRadius: 12, fontSize: '.72rem', letterSpacing: 1 }}>
                          UNESCO {h.unescoYear}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '36px 44px' }}>
                  {/* Stats */}
                  <div className="stat-chips" style={{ justifyContent: 'flex-start', marginBottom: 28 }}>
                    <div className="stat-chip"><span className="stat-chip-value">{h.years}</span><span className="stat-chip-label">বছরের ঐতিহ্য</span></div>
                    <div className="stat-chip"><span className="stat-chip-value">{h.artisans}</span><span className="stat-chip-label">কারিগর</span></div>
                    <div className="stat-chip"><span className="stat-chip-value">{h.time}</span><span className="stat-chip-label">একটি পণ্যের সময়</span></div>
                  </div>

                  {/* Description */}
                  <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(201,168,76,.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: '1.2rem' }}>📜</span>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--deep-red)' }}>ইতিহাস ও উৎপত্তি</h3>
                    </div>
                    <p style={{ color: 'var(--ink-light)', lineHeight: 2, paddingLeft: 34 }}>{h.desc}</p>
                  </div>

                  {/* Regions */}
                  <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(201,168,76,.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: '1.2rem' }}>📍</span>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--deep-red)' }}>প্রধান অঞ্চলসমূহ</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingLeft: 34 }}>
                      {h.regions.map(r => (
                        <span key={r} style={{ background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', padding: '4px 12px', borderRadius: 20, fontSize: '.8rem', color: 'var(--worn-brown)' }}>
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="quote-box">
                    <p className="quote-text" style={{ position: 'relative', zIndex: 1 }}>"{h.quote}"</p>
                  </div>

                  {/* Shop link */}
                  <div style={{ marginTop: 24 }}>
                    <Link href={`/shop?craft=${h.id}`} className="btn-primary">
                      {h.icon} {h.name}-এর পণ্য দেখুন
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
