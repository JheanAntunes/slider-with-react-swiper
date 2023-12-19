import 'swiper/swiper-bundle.css'
import { Swiper } from '../swiper'
import { TypographyH1 } from '../typography'
import GenerateSwiperSliders from '../utils/generate-swiper-sliders'
function ExampleSliderSwiperAutoScroll() {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <TypographyH1>Slider auto-scroll</TypographyH1>
      <div className="w-full max-w-4xl">
        <Swiper
          autoplay={true}
          speed={500}
          loop={true}
          slidesPerView={3}
          spaceBetween={32}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          <GenerateSwiperSliders />
        </Swiper>
      </div>
    </section>
  )
}

export default ExampleSliderSwiperAutoScroll
