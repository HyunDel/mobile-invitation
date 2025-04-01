import Image from 'next/image';

export default function InvitationCard() {
  return (
    <div className='text-center text-gray-800 px-4 py-6 space-y-4'>
      {/* 날짜 */}
      <div>
        <h2 className='text-2xl tracking-widest font-semibold'>25 | 07 | 12</h2>
        <p className='text-sm text-gray-500 mt-1'>SATURDAY</p>
      </div>

      {/* 커플 사진 */}
      <div className='my-6'>
        <Image
          src='/images/123.jpeg'
          alt='신랑 신부'
          width={400}
          height={500}
          className='rounded-md mx-auto object-cover'
        />
      </div>

      {/* 이름 */}
      <h3 className='text-lg font-medium'>박상현 ㅣ 김지희</h3>

      {/* 장소 및 시간 */}
      <p className='text-sm text-gray-600'>
        2025년 7월 12일 토요일 오후 2시 30분
        <br />
        아르베웨딩홀
      </p>

      {/* 시적 인삿말 */}
      <div className='text-sm text-gray-700 italic leading-relaxed pt-4'>
        <p>두 사람이 꽃과 나무처럼 걸어와서</p>
        <p>서로의 모든 것이 되기 위해</p>
        <p>오랜 기다림 끝에 혼례식을 치르는 날</p>
        <p>세상은 더욱 아름다워라</p>
        <p className='mt-2 text-xs text-gray-500'>
          – 이해인, &lt;사랑의 사람들이어&gt;
        </p>
      </div>

      {/* 초대 인삿말 */}
      <div className='pt-6'>
        <h4 className='text-xs tracking-widest text-pink-400 font-semibold'>
          INVITATION
        </h4>
        <p className='text-base font-medium mt-2'>소중한 분들을 초대합니다</p>
        <p className='text-sm text-gray-600 mt-3 leading-relaxed'>
          살랑이는 바람결에
          <br />
          사랑이 묻어나는 계절입니다.
          <br />
          여기 곱고 예쁜 두 사람이{' '}
          <span className='text-red-500 font-semibold'>사랑</span>을 맺어
          <br />
          인생의 반려자가 되려 합니다.
          <br />
          새 인생을 시작하는 이 자리에 오셔서
          <br />
          <span className='text-red-500 font-semibold'>축복</span>해 주시면
          감사하겠습니다.
        </p>
      </div>
    </div>
  );
}
