'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;
  console.log(kakaoKey);

  useEffect(() => {
    const script = document.createElement('script');
    console.log(kakaoKey);
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(37.5086531, 127.039422), // 아르베 웨딩홀 위치
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.5086531, 127.039422),
          map,
          title: '아르베 웨딩홀',
        });
      });
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={mapRef} className='w-full h-64 rounded-md shadow border' />;
}
