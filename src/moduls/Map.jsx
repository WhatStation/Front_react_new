import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
    width: 400px;
    height: 30vh;
    z-index: 9999;
`;

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const { naver } = window;
    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.5579479, 127.040481),
      zoom: 16,
    });
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5579479, 127.040481),
      map: map,
      icon: {
        content: '<div style="background-color: green; width: 20px; height: 20px; border-radius: 50%;"></div>',
        size: new naver.maps.Size(20, 20),
        anchor: new naver.maps.Point(10, 10),
      },
    });
    const circle = new naver.maps.Circle({
      center: new naver.maps.LatLng(37.5579479, 127.040481),
      map: map,
      radius: 100,
      strokeColor: 'transparent',
      fillColor: '#40FF00',
      fillOpacity: 0.2,
    });
  }, []);

  return (
    <MapContainer ref={mapRef} />
  );
}

export default Map;