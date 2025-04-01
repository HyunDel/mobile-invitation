// components/PhotoGallery.tsx
'use client';

import Image from 'next/image';

const photos = [
  '/images/123.jpeg',
  '/images/1234.jpeg',
  '/images/12345.jpeg',
  '/images/123456.jpeg',
  '/images/1234567.jpeg',
  '/images/wedding.jpg',
];

export default function PhotoGalleryMasonry() {
  return (
    <section className='text-center text-gray-800 px-4 py-10'>
      {/* 제목 */}
      <div className='mb-6'>
        <h4 className='text-xs tracking-widest text-pink-400 font-semibold mb-1'>
          GALLERY
        </h4>
        <h2 className='text-xl font-bold'>갤러리</h2>
      </div>

      {/* Masonry 스타일 이미지 그리드 */}
      <div className='columns-2 gap-2 space-y-2'>
        {photos.map((src, idx) => (
          <div
            key={idx}
            className='overflow-hidden rounded-md break-inside-avoid'
          >
            <Image
              src={src}
              alt={`갤러리 이미지 ${idx + 1}`}
              width={600}
              height={400}
              layout='responsive'
              className='object-cover w-full h-auto'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
