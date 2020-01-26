import React, { createRef, useEffect, useState } from 'react';

// @ts-ignore
import { Map } from 'mapbox-gl';

let map: Map;

export const MapBox = () => {
  const mapRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (mapRef.current) {
      map = new Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/light-v10',
        zoom: 15,
        center: [30.31413, 59.93863],
        accessToken:
          'pk.eyJ1IjoiYXJ0LWJhemhpbiIsImEiOiJjazV2ZWVyZ2cwYW1tM2ZydnczeWphb2w5In0.b8wbhgDQKSz_SURarTFXxw'
      });
    }

    return () => map && map.remove();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        position: 'absolute',
        width: '100%',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0'
      }}
    ></div>
  );
};
