import { generateMedia } from 'styled-media-query';

const mediaqueries = generateMedia({
  desktop: '1280px',
  tabletLandscape: '1024px',
  tablet: '721px',
  mobile: '720px',
});

export default mediaqueries;
