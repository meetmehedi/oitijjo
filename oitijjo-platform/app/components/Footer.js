import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" suppressHydrationWarning>
      <div className="container" suppressHydrationWarning>
        <div className="footer-grid" suppressHydrationWarning>
          <div suppressHydrationWarning>
            <div className="footer-brand" suppressHydrationWarning>ঐতিজ্জ্বো ✦</div>
            <p className="footer-desc" suppressHydrationWarning>
              বাংলাদেশের গ্রামীণ কারিগর ও ক্রেতাদের মধ্যে সরাসরি ডিজিটাল সেতুবন্ধন।
              প্রতিটি কেনাকাটায় একজন কারিগরের জীবন উজ্জ্বল হয়।
            </p>
          </div>
          <div className="footer-col" suppressHydrationWarning>
            <h4>পণ্য</h4>
            <ul>
              <li><Link href="/shop?craft=nakshi">নকশিকাঁথা</Link></li>
              <li><Link href="/shop?craft=tant">তাঁত শিল্প</Link></li>
              <li><Link href="/shop?craft=pottery">মৃৎশিল্প</Link></li>
              <li><Link href="/shop?craft=shital">শীতলপাটি</Link></li>
            </ul>
          </div>
          <div className="footer-col" suppressHydrationWarning>
            <h4>প্ল্যাটফর্ম</h4>
            <ul>
              <li><Link href="/artisans">কারিগর</Link></li>
              <li><Link href="/heritage">ঐতিহ্য</Link></li>
              <li><Link href="/become-artisan">কারিগর হিসেবে যোগ দিন</Link></li>
              <li><Link href="/about">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/admin" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>🛡️ অ্যাডমিন প্যানেল</Link></li>
            </ul>
          </div>
          <div className="footer-col" suppressHydrationWarning>
            <h4>সহায়তা</h4>
            <ul>
              <li><Link href="/faq">সাধারণ প্রশ্ন</Link></li>
              <li><Link href="/shipping">ডেলিভারি নীতি</Link></li>
              <li><Link href="/returns">রিটার্ন নীতি</Link></li>
              <li><Link href="/contact">যোগাযোগ করুন</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" suppressHydrationWarning>
          <p>© ২০২৬ ঐতিজ্জ্বো। বাংলাদেশের ঐতিহ্যবাহী শিল্পের সংরক্ষণে নিবেদিত। ⚜</p>
          <p style={{ marginTop: 6 }}>তথ্যসূত্র: Wikipedia · UNESCO · BCMEA</p>
        </div>
      </div>
    </footer>
  );
}
