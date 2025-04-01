'use client';

import { useEffect, useState } from 'react';

export default function WeddingCountdown() {
  const weddingDate = new Date('2025-07-12T14:30:00'); // 결혼식 날짜
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // 초기 실행
    const interval = setInterval(updateCountdown, 1000); // 1초마다 갱신

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='text-center text-gray-800 py-10 px-4 bg-[#fdfafa] rounded-md'>
      {/* 날짜 표기 */}
      <div className='mb-6'>
        <h2 className='text-xl font-bold'>2025.7.12</h2>
        <p className='text-sm text-gray-500 mt-1'>토요일 오후 2시 30분</p>
      </div>

      {/* 달력 (간단히 구성된 형태) */}
      <div className='text-sm leading-relaxed mb-6'>
        <div className='grid grid-cols-7 gap-1 text-gray-400 font-medium mb-2'>
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className='grid grid-cols-7 gap-1 text-gray-700'>
          {[
            ...Array(2).fill(null), // 1일은 화요일이므로 일요일 자리는 비워둠
            ...Array.from({ length: 31 }, (_, i) => i + 1),
          ].map((day, idx) => {
            const isTarget = day === 12;
            return (
              <div
                key={idx}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  isTarget ? 'bg-gray-300 text-white font-semibold' : ''
                } ${day === null ? '' : ''}`}
              >
                {day || ''}
              </div>
            );
          })}
        </div>
      </div>

      {/* 디데이 카운트 */}
      <div className='flex justify-center gap-3 mb-4'>
        <CountdownBox label='DAYS' value={timeLeft.days} />
        <CountdownBox label='HOUR' value={timeLeft.hours} />
        <CountdownBox label='MIN' value={timeLeft.minutes} />
        <CountdownBox label='SEC' value={timeLeft.seconds} />
      </div>

      <p className='text-sm text-gray-700'>
        상현 <span className='text-pink-500'>♥</span> 지희의 결혼식이{' '}
        <span className='text-pink-500 font-semibold'>{timeLeft.days}일</span>{' '}
        남았습니다.
      </p>
    </section>
  );
}

// 디데이 박스 컴포넌트
function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div className='bg-white border rounded-md px-3 py-2 shadow-sm'>
      <div className='text-lg font-bold'>{String(value).padStart(2, '0')}</div>
      <div className='text-xs text-gray-400 mt-1'>{label}</div>
    </div>
  );
}
