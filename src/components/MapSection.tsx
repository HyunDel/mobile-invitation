'use client';
import Image from 'next/image';
import KakaoMap from './KakaoMap';

export default function MapSection() {
  const position = {
    lat: 37.5108949, // 아르베웨딩홀 위도
    lng: 127.043005, // 아르베웨딩홀 경도
  };
  return (
    <section className='text-center text-gray-800 px-4 py-10'>
      {/* 제목 */}
      <div className='mb-4'>
        <h4 className='text-xs tracking-widest text-pink-300 font-semibold mb-1'>
          LOCATION
        </h4>
        <h2 className='text-xl font-bold'>오시는 길</h2>
      </div>

      {/* 장소 정보 */}
      <div className='mb-6'>
        <p className='text-base font-medium'>아르베웨딩홀</p>
        <p className='text-sm text-gray-500 mt-1'>
          서울특별시 강남구 봉은사로 302 (역삼동 680)
        </p>
      </div>

      {/* 지하철 안내 */}
      <div className='mb-4 text-sm text-left text-gray-700'>
        <p className='font-semibold mb-1'>🚇 지하철 이용 시</p>
        <ul className='list-disc list-inside space-y-1'>
          <li>
            9호선 <span className='font-medium'>선정릉역(수인분당선)</span>{' '}
            4번출구 도보 5분
          </li>
          <li>
            9호선 <span className='font-medium'>언주역</span> 5번출구 도보 5분
          </li>
        </ul>
      </div>

      {/* 주차장 안내 */}
      <div className='text-sm text-left text-gray-700'>
        <p className='font-semibold mb-1'>🅿️ 주차장 안내</p>
        <ul className='list-disc list-inside space-y-1'>
          <li>
            제 1주차장: 서울시 강남구 논현동 237-12{' '}
            <span className='font-medium'> 경복주차장</span>
          </li>
          <li>
            제 2주차장: 서울시 강남구 언주로 603{' '}
            <span className='font-medium'>국민은행</span>
          </li>
        </ul>
      </div>

      {/* 장소 정보 */}
      <div className='mb-6'>
        <KakaoMap />
      </div>

      {/* 길찾기 버튼 */}
      <div className='flex justify-center gap-2 text-sm'>
        <MapButton
          label='네이버 지도'
          href='https://map.naver.com/v5/entry/place/1681062430?c=15,0,0,0,dh'
          icon='/images/naver.png'
        />
        <MapButton
          label='카카오 내비'
          href='https://map.kakao.com/link/to/아르베웨딩홀,37.5108949,127.043005'
          icon='/images/kakao.png'
        />
      </div>
    </section>
  );
}

function MapButton({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition'
    >
      <Image src={icon} alt={label} width={16} height={16} />
      {label}
    </a>
  );
}
