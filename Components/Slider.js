import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image loading="lazy" src="/images/slider-1.jpg" layout='fill'  alt="image"/>
        </div>
        <div>
          <Image loading="lazy" src="/images/slider-2.jpg" layout='fill'  alt="image"/>
        </div>
        <div>
          <Image loading="lazy" src="/images/slider-3.jpg" layout='fill'  alt="image"/>
        </div>
        <div>
          <Image loading="lazy" src="/images/slider-4.jpg" layout='fill'  alt="image"/>
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;