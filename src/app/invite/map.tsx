// app/invite/map.tsx
import MapSection from '../../components/MapSection';
import BottomNav from '../../components/BottomNav';

export default function MapPage() {
  return (
    <main className='min-h-screen pb-20 bg-white'>
      <div className='max-w-md mx-auto px-4 py-6'>
        <h2 className='text-lg font-bold mb-4'>오시는 길</h2>
        <MapSection />
      </div>
      <BottomNav />
    </main>
  );
}
