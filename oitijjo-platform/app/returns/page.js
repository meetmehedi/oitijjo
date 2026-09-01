import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ReturnsPage() {
  return (
    <>
      <Navbar />

      <div style={{ background: 'linear-gradient(135deg, var(--ink), #3d2010)', padding: '56px 0 44px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, marginBottom: 8 }}>
          রিটার্ন ও রিফান্ড নীতি
        </h1>
        <p style={{ color: 'rgba(232,201,122,.75)', fontSize: '.95rem' }}>
          এসক্রো সুরক্ষা ও ৭ দিনের সহজ রিটার্ন নীতিমালা
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="ornament">✦ ✦ ✦</div>

          <div className="card" style={{ padding: '36px 40px', marginBottom: 28 }}>
            <h2 style={{ fontSize: '1.3rem', color: 'var(--ink)', fontWeight: 700, marginBottom: 14 }}>
              🛡️ ৭ দিনের সহজ রিটার্ন পলিসি
            </h2>
            <p style={{ color: 'var(--ink-light)', lineHeight: 1.8, marginBottom: 16 }}>
              পণ্য হাতে পাওয়ার পর যদি দেখেন পণ্যটিতে কোনো ত্রুটি রয়েছে, ভাঙা বা ছেঁড়া অবস্থায় পৌঁছেছে কিংবা ওয়েবসাইটের ছবির সাথে বর্ণনার উল্লেখযোগ্য অমিল রয়েছে, তবে ডেলিভারির দিন থেকে <strong>৭ দিনের মধ্যে</strong> রিটার্নের আবেদন করতে পারবেন।
            </p>
            <div style={{ background: 'rgba(201,168,76,0.1)', padding: '16px 20px', borderRadius: '6px', borderLeft: '4px solid var(--terracotta)' }}>
              <strong>রিফান্ড প্রক্রিয়া:</strong> এসক্রো সিস্টেমের মাধ্যমে আপনার পেমেন্ট রিফান্ড সরাসরি ২ কার্যদিবসের মধ্যে আপনার bKash/Nagad বা ব্যাংক অ্যাকাউন্টে ফেরত দেওয়া হবে।
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Link href="/contact" className="btn-primary">রিটার্ন বা সাপোর্টের জন্য যোগাযোগ করুন</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
