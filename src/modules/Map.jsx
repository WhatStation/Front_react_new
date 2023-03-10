import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
    width: 400px;
    height: 30vh;
    z-index: 9999;
`;

const STATION_COORDS = {
  '가좌역': [37.568465, 126.914778],
  '경의중앙 신촌역': [37.559778, 126.942308],
  '망원역': [37.556328, 126.910351],
  '상수역': [37.547716, 126.921358],
  '서강대역': [37.551881, 126.938543],
  '신촌역': [37.555134, 126.936893],
  '이대역': [37.556733, 126.946013],
  '합정역': [37.549442, 126.913739],
  '홍대입구역': [37.557192, 126.925381],
  'default': [37.5579479, 127.040481],
};

function Map({ station }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const { naver } = window;
    const coords = STATION_COORDS[station] || STATION_COORDS['default'];
    const center = new naver.maps.LatLng(coords[0], coords[1]);
    const position = new naver.maps.LatLng(coords[0], coords[1]);

    const map = new naver.maps.Map(mapRef.current, {
      center: center,
      zoom: 16,
    });
    const marker = new naver.maps.Marker({
      position: position,
      map: map,
      icon: {
        content: '<div style="background-color: green; width: 20px; height: 20px; border-radius: 50%;"></div>',
        size: new naver.maps.Size(20, 20),
        anchor: new naver.maps.Point(10, 10),
      },
    });
    const circle = new naver.maps.Circle({
      center: position,
      map: map,
      radius: 100,
      strokeColor: 'transparent',
      fillColor: '#40FF00',
      fillOpacity: 0.2,
    });
  }, [station]);

  return (
    <MapContainer ref={mapRef} />
  );
}

export default Map;