import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ShippingPage() {
  return (
    <>
      <Navbar />

      <div style={{ background: 'linear-gradient(135deg, var(--ink), #3d2010)', padding: '56px 0 44px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--gold-light)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, marginBottom: 8 }}>
          ডেলিভারি ও শিপিং পলিসি
        </h1>
        <p style={{ color: 'rgba(232,201,122,.75)', fontSize: '.95rem' }}>
          সারা বাংলাদেশে নিরাপদ ও সতর্ক হস্তশিল্প ডেলিভারি প্রক্রিয়া
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="ornament">✦ ✦ ✦</div>

          <div className="card" style={{ padding: '36px 40px', marginBottom: 28 }}>
            <h2 style={{ fontSize: '1.3rem', color: 'var(--ink)', fontWeight: 700, marginBottom: 14 }}>
              🚚 ডেলিভারির সময় ও চার্জ
            </h2>
            <p style={{ color: 'var(--ink-light)', lineHeight: 1.8, marginBottom: 14 }}>
              • <strong>ঢাকা মেট্রোপলিটন এলাকা:</strong> অর্ডার কনফার্মেশনের ২-৩ কার্যদিবসের মধ্যে ডেলিভারি। (চার্জ: ৳৬০)<br />
              • <strong>ঢাকার বাইরে সারা বাংলাদেশ:</strong> ৩-৫ কার্যদিবসের মধ্যে সুন্দরবন, পাঠাও বা রেডেক্স কুরিয়ারের মাধ্যমে। (চার্জ: ৳৮০)<br />
              • <strong>কাস্টম বা হাতে বোনা স্পেশাল অর্ডার:</strong> তৈরির সময় অনুযায়ী ৭-১২ কার্যদিবস।
            </p>
          </div>

          <div className="card" style={{ padding: '36px 40px', marginBottom: 28 }}>
            <h2 style={{ fontSize: '1.3rem', color: 'var(--ink)', fontWeight: 700, marginBottom: 14 }}>
              📦 বিশেষ পরিবেশবান্ধব প্যাকেজিং
            </h2>
            <p style={{ color: 'var(--ink-light)', lineHeight: 1.8 }}>
              যেহেতু মৃৎশিল্প ও মাটির পাত্র ভঙ্গুর এবং তাঁত ও নকশিকাঁথা মূল্যবান, তাই প্রতিটি পণ্যের জন্য বাবল র‍্যাপ এবং পরিবেশবান্ধব শক্ত খাঁটি কাগজের বাক্সে সুরক্ষিতভাবে প্যাক করা হয় যাতে পরিবহনে কোনো ক্ষতি না হয়।
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
