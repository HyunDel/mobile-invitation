'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const photos = [
  '/images/123.jpeg',
  '/images/1234.jpeg',
  '/images/12345.jpeg',
  '/images/123456.jpeg',
  '/images/1234567.jpeg',
  '/images/wedding.jpg',
];

export default function PhotoGalleryMasonry() {
  const [expanded, setExpanded] = useState(false);

  const displayedPhotos = expanded ? photos : photos.slice(0, 6);

  return (
    <section className='text-center text-gray-800 px-4 py-10'>
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
    </section>
  );
}
