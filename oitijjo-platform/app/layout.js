import './globals.css';

export const metadata = {
  title: 'ঐতিজ্জ্বো — বাংলার ঐতিহ্যবাহী কারুশিল্পের বাজার',
  description:
    'ঐতিজ্জ্বো — বাংলাদেশের গ্রামীণ কারিগর ও ক্রেতাদের মধ্যে সরাসরি সংযোগ স্থাপনকারী ডিজিটাল মার্কেটপ্লেস। নকশিকাঁথা, তাঁত, মৃৎশিল্প ও শীতলপাটি।',
  keywords: 'নকশিকাঁথা, তাঁত, মৃৎশিল্প, শীতলপাটি, বাংলাদেশ, ঐতিহ্য, কারুশিল্প',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
