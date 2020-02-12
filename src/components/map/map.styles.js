import styled from 'styled-components';

const Map = styled.iframe`
  position: absolute;
  border: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

Map.Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 300px;
  padding: 0;
  overflow: hidden;
`;

export default Map;