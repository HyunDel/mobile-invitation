'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const photos = [
  '/images/main1.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
  '/images/test2.jpeg',
];

export default function PhotoGalleryGrid() {
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const displayedPhotos = expanded ? photos : photos.slice(0, 9); // 기본 9개 (3x3)

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className='text-center text-gray-800 px-4 py-10 relative z-0'>
      {/* 제목 */}
      <div className='mb-6'>
        <h4 className='text-xs tracking-widest text-pink-300 font-semibold mb-1'>
          PHOTO GALLERY
        </h4>
        <h2 className='text-xl font-bold'>갤러리</h2>
      </div>

      {/* 그리드 구조 */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        {displayedPhotos.map((src, idx) => (
          <div
            key={idx}
            className='overflow-hidden rounded-md cursor-pointer'
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={src}
              alt={`갤러리 이미지 ${idx + 1}`}
              width={500}
              height={500}
              className='object-cover w-full h-auto rounded-md'
              layout='responsive'
            />
          </div>
        ))}
      </div>

      {/* 더보기/접기 버튼 */}
      {photos.length > 9 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className='mt-8 px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded'
        >
          갤러리 {expanded ? '접기 -' : '더보기 +'}
        </button>
      )}

      {/* 모달 */}
      {selectedIndex !== null && (
        <div
          className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center'
          onTouchStart={handleTouchStart}
          onTouchMove={(e) => {
            touchEndX.current = e.touches[0].clientX;
            e.preventDefault();
          }}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'none' }}
        >
          <button
            className='absolute top-4 right-4 text-white hover:text-pink-300'
            onClick={() => setSelectedIndex(null)}
          >
            <X size={28} />
          </button>

          <button
            onClick={handlePrev}
            className='absolute left-4 md:left-10 text-white hover:text-pink-300'
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={handleNext}
            className='absolute right-4 md:right-10 text-white hover:text-pink-300'
          >
            <ChevronRight size={36} />
          </button>

          <div className='relative max-w-3xl w-full px-4'>
            <Image
              src={photos[selectedIndex]}
              alt='확대 이미지'
              width={1200}
              height={800}
              className='w-full h-auto rounded-md'
              draggable={false}
            />
          </div>
        </div>
      )}
    </section>
  );
}
