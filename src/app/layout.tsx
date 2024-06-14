import type { Metadata } from 'next';
import { Titillium_Web, Playfair_Display } from 'next/font/google';
import './global.css';

// import Button from './components/common/Button';
import Footer from './components/client/Footer';
import { NavBar } from './components/nav/NavBar';

const titillium = Titillium_Web({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium',
});

const playfair = Playfair_Display({
  weight: ['700', '800', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'MMM Adevertising',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' className={`${titillium.variable} ${playfair.variable}`}>
      <body className='bg-bg'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
