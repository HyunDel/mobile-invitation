'use client';

import { useEffect, useRef } from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=5dccf9b0aa90fcf5d160c71e7a1ab78a&autoload=false`;
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
