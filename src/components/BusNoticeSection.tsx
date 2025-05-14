'use client';

const BusNoticeSection = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <h3
        style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}
      >
        🚌 단체 버스 안내
      </h3>
      <p style={{ marginBottom: '0.3rem' }}>
        멀리서 찾아오시는 분들의 편의를 위해
        <br />
        예식장 ↔ 지정 장소 간 단체 버스를 준비하였습니다.
      </p>
      <p style={{ marginBottom: '0.3rem' }}>
        <strong>탑승장소</strong> : 태양광주차장(서구 치평동 1154번지 JS웨딩홀
        옆)
        <br />
        <strong>운행회사</strong> : 송광관광버스
        <br />
        <strong>출발시간</strong> : 오후 8시 30분
      </p>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        ※ 탑승 인원 파악을 위해 사전 연락 부탁드립니다.
      </p>
    </div>
  );
};

export default BusNoticeSection;
