'use client';

import Parallax from '@/components/parallax';

const ParallaxPage = () => {
  return (
    <>
      <section>
        <Parallax type='services' />
      </section>
      <section>
        <Parallax type='other' />
      </section>
    </>
  );
};

export default ParallaxPage;
