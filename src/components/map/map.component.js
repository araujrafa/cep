import React from 'react';
import Map from './map.styles';

const MapComponent = ({ cep }) => (
  <Map.Container>
    <Map
      marginWidth="0"
      marginHeight="0" 
      frameBorder="0" 
      scrolling="auto"
      src={`https://www.google.com.br/maps?q=${cep},%20Brasil&output=embed`} 
      allowFullScreen
    />
  </Map.Container>
);

export default MapComponent;
