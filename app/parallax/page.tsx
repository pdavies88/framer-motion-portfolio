import Parallax from '@/components/parallax';
import Portfolio from '@/components/portfolio';
import TextScroll from '@/components/textScroll';

const ParallaxPage = () => {
  return (
    <>
      <section>
        <Parallax type='services' />
      </section>
      <Portfolio />
      <section>
        <Parallax type='other' />
      </section>
      <TextScroll />
    </>
  );
};

export default ParallaxPage;
