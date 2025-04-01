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

      {/* 초대 인삿말 */}
      <div className='pt-6'>
        <h4 className='text-s tracking-widest text-pink-400 font-semibold'>
          INVITATION
        </h4>
        <p className='text-base font-medium mt-2'>소중한 분들을 초대합니다</p>
        <p className='text-xs text-gray-600 mt-3 leading-relaxed'>
          두 사람이 사랑으로 만나
          <br />
          진실과 이해로써 하나를 이루려 합니다.
          <br />이 두 사람을 지성으로 아끼고 돌봐주신
          <br />
          여러 어른과 친지분들을 모시고 서약을 맺고자 하오니
          <br />
          바쁘신 가운데 두 사람의 장래를
          <br />
          가까이에서 축복해 주시면 고맙겠습니다.
        </p>
      </div>
    </div>
  );
}
