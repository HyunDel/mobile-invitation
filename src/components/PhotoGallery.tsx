'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

const photos = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
  '/images/12.jpg',
  '/images/14.jpg',
  '/images/15.jpg',
];

export default function PhotoGalleryGrid() {
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const displayedPhotos = expanded ? photos : photos.slice(0, 9); // 3x3 기본 출력

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

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <section className='text-center text-gray-800 px-4 py-10'>
      {/* 제목 */}
      <div className='mb-6'>
        <h4 className='text-xs tracking-widest text-pink-300 font-semibold mb-1'>
          PHOTO GALLERY
        </h4>
        <h2 className='text-xl font-bold'>PHOTO GALLERY</h2>
      </div>

      {/* 갤러리 그리드 */}
      <div className='grid grid-cols-3 gap-3'>
        {displayedPhotos.map((src, idx) => (
          <div
            key={idx}
            className='overflow-hidden rounded-md cursor-pointer'
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={src}
              alt={`갤러리 이미지 ${idx + 1}`}
              width={600}
              height={400}
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
              className='w-full h-auto object-cover rounded-md'
              priority={idx < 3} // 초기 3개 우선 로드
            />
          </div>
        ))}
      </div>

      {/* 더보기 버튼 */}
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
