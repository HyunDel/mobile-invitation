'use client';

const BusNoticeSection = () => {
  return (
    <div className='pt-6 text-center'>
      <h4 className='text-s tracking-widest text-black-300 font-semibold mb-2'>
        🚌 대절 버스 안내
      </h4>
      <p className='text-base font-medium'>
        멀리서 찾아오시는 분들의 편의를 위해
        <br />
        예식장↔지정 장소 간 대절 버스를 준비하였습니다.
      </p>
      <p className='text-sm text-gray-700 mt-3 leading-relaxed'>
        <span className='font-semibold'>탑승장소</span> : 태양광주차장
        (광주광역시 서구 치평동 1154번지 JS웨딩홀 옆)
        <br />
        <span className='font-semibold'>운행회사</span> : 송광관광버스
        <br />
        <span className='font-semibold'>출발시간</span> : 오전 8시 30분
      </p>
      <p className='text-xs text-gray-500 mt-2'>
        ※ 전세버스를 이용하실 분들은 탑승인원 파악을 위해 사전에 연락주시면
        감사하겠습니다
      </p>
    </div>
  );
};

export default BusNoticeSection;
