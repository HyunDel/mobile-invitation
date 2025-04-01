// app/invite/info.tsx
import InvitationCard from '../../components/InvitationCard';
import BottomNav from '../../components/BottomNav';

export default function InfoPage() {
  return (
    <main className='min-h-screen pb-20 bg-white'>
      <div className='max-w-md mx-auto px-4 py-6'>
        <InvitationCard />
      </div>
      <BottomNav />
    </main>
  );
}
