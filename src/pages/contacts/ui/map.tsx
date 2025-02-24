'use client';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent = () => {
  return (
    <YMaps
      query={{
        apikey: '8ae5470d-cbf0-4cbc-9088-d313b93b690d',
      }}
    >
      <Map
        height="100%"
        defaultState={{ center: [55.687736, 37.368748], zoom: 15 }}
      >
        <Placemark geometry={[55.687736, 37.368748]} />
      </Map>
    </YMaps>
  );
};

export default MapComponent;
