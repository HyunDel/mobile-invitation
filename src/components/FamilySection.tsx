// components/FamilySection.tsx
'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react'; // 아이콘 라이브러리 사용 시

export default function FamilySection() {
  return (
    <section className='text-center text-gray-800 px-4 py-8'>
      {/* 커플 사진 */}
      <div className='mb-6'>
        <Image
          src='/images/wedding.jpg' // 실제 이미지 경로로 교체
          alt='신랑 신부'
          width={400}
          height={300}
          className='rounded-md mx-auto object-cover'
        />
      </div>

      {/* 부모님 소개 */}
      <div className='text-sm text-gray-700 leading-relaxed space-y-1'>
        <p>
          <span className='font-medium'>박종석</span> ·{' '}
          <span className='font-medium'>김영희</span> 의 아들{' '}
          <span className='font-semibold'>상현</span>
        </p>
        <p>
          <span className='font-medium'>김용백</span> ·{' '}
          <span className='font-medium'>이인순</span> 의 딸{' '}
          <span className='font-semibold'>지희</span>
        </p>
      </div>

      {/* 연락하기 버튼 */}
      <div className='mt-6'>
        <button className='flex items-center justify-center gap-2 w-full max-w-xs mx-auto py-2 px-4 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition'>
          <Phone size={16} />
          연락하기
        </button>
      </div>
    </section>
  );
}
