import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '상현 💍 지희의 모바일 청첩장',
  description: '2025년 7월 12일, 청담동에서 우리 결혼해요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className='bg-neutral-100 text-gray-800 antialiased'>
        <main className='w-full max-w-sm mx-auto min-h-screen bg-white shadow-md flex flex-col items-center justify-center px-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
