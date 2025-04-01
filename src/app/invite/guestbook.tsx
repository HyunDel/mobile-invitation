// app/invite/guestbook.tsx
import Guestbook from '../../components/Guestbook';
import BottomNav from '../../components/BottomNav';

export default function GuestbookPage() {
  return (
    <main className='min-h-screen pb-20 bg-white'>
      <div className='max-w-md mx-auto px-4 py-6'>
        <h2 className='text-lg font-bold mb-4'>방명록</h2>
        <Guestbook />
      </div>
      <BottomNav />
    </main>
  );
}
