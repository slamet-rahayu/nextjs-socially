/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import { ReactElement } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const data = [
  {
    src: '/carousel-1.webp',
    name: 'carousel1'
  },
  {
    src: '/carousel-2.webp',
    name: 'carousel2'
  }
];

export default function ShopCarousel(): ReactElement {
  return (
    <Box sx={{ px: 5 }}>
      <Carousel showThumbs={false} autoPlay showStatus={false} infiniteLoop transitionTime={1000}>
        {data.map((v) => (
          <Box key={v.name}>
            <img src={v.src} alt={v.name} style={{ borderRadius: '5px' }} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
