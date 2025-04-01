// components/BottomNav.tsx
import { Home, Map, Image, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className='fixed bottom-0 w-full flex justify-around bg-white border-t py-2 z-10'>
      <Link href='/'>
        <Home size={24} />
      </Link>
      <Link href='/invite/map'>
        <Map size={24} />
      </Link>
      <Link href='/invite/photos'>
        <Image size={24} />
      </Link>
      <Link href='/invite/guestbook'>
        <MessageCircle size={24} />
      </Link>
    </nav>
  );
}
