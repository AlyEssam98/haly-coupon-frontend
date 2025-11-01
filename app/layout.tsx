import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'HALY Coupon',
  description: 'Find the best coupons, deals and discounts nearby',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-7xl p-6">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
