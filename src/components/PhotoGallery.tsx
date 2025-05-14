'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

const photos = [
  '/images/main1.jpeg',
  '/images/test2.jpeg',
  '/images/test3.jpeg',
  '/images/test4.jpeg',
];

export default function PhotoGalleryMasonry() {
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const displayedPhotos = expanded ? photos : photos.slice(0, 6);

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

  return (
    <section className='text-center text-gray-800 px-4 py-10 relative z-0'>
      {/* 제목 */}
      <div className='mb-6'>
        <h4 className='text-xs tracking-widest text-pink-300 font-semibold mb-1'>
          GALLERY
        </h4>
        <h2 className='text-xl font-bold'>갤러리</h2>
      </div>

      {/* 이미지 그리드 */}
      <div className='columns-2 gap-2 space-y-2'>
        {displayedPhotos.map((src, idx) => (
          <div
            key={idx}
            className='overflow-hidden rounded-md break-inside-avoid cursor-pointer'
            onClick={() => setSelectedIndex(idx)}
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

      {/* 접기/펴기 버튼 */}
      {photos.length > 6 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className='mt-6 mx-auto flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 transition'
        >
          {expanded ? (
            <>
              접기 <ChevronUp size={16} />
            </>
          ) : (
            <>
              더보기 <ChevronDown size={16} />
            </>
          )}
        </button>
      )}

      {/* 모달 (슬라이드) */}
      {selectedIndex !== null && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center'>
          <button
            className='absolute top-4 right-4 text-white hover:text-pink-300 transition'
            onClick={() => setSelectedIndex(null)}
          >
            <X size={28} />
          </button>

          {/* 좌우 버튼 */}
          <button
            onClick={handlePrev}
            className='absolute left-4 md:left-10 text-white hover:text-pink-300 transition'
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={handleNext}
            className='absolute right-4 md:right-10 text-white hover:text-pink-300 transition'
          >
            <ChevronRight size={36} />
          </button>

          {/* 이미지 표시 */}
          <div className='relative max-w-3xl w-full px-4'>
            <Image
              src={photos[selectedIndex]}
              alt='확대 이미지'
              width={1200}
              height={800}
              className='w-full h-auto rounded-md'
            />
          </div>
        </div>
      )}
    </section>
  );
}
