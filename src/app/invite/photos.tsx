// app/invite/photos.tsx
import PhotoSlider from '../../components/PhotoSlider';
import BottomNav from '../../components/BottomNav';

export default function PhotosPage() {
  return (
    <main className='min-h-screen pb-20 bg-white'>
      <div className='max-w-md mx-auto px-4 py-6'>
        <h2 className='text-lg font-bold mb-4'>추억 사진</h2>
        <PhotoSlider />
      </div>
      <BottomNav />
    </main>
  );
}
