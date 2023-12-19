import Link from 'next/link'
import 'swiper/swiper-bundle.css'
import { Swiper } from '../swiper'
import { TypographyH1 } from '../typography'
import GenerateSwiperSliders from '../utils/generate-swiper-sliders'
function ExampleSliderSwiperBasic() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8">
      <div className="flex gap-1">
        <TypographyH1 id="slider-basic">Slider básico</TypographyH1>
        <Link
          href="https://swiperjs.com"
          className="text-2xl text-blue-600 underline md:text-3xl lg:text-4xl lg:hover:text-blue-700"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Swiperjs
        </Link>
      </div>
      <div className="w-full max-w-4xl">
        <Swiper
          aria-labelledby="slider-basic"
          slidesPerView={3}
          spaceBetween={32}
          navigation={true}
          pagination={{ clickable: true }}
          rewind={true}
        >
          <GenerateSwiperSliders />
        </Swiper>
      </div>
    </section>
  )
}

export default ExampleSliderSwiperBasic
