import 'swiper/swiper-bundle.css'
import { Swiper } from '../swiper'
import { TypographyH1 } from '../typography'
import GenerateSwiperSliders from '../utils/generate-swiper-sliders'
function ExampleSliderSwiperResponsive() {
  return (
    <section className="container flex flex-col items-center justify-start gap-8">
      <TypographyH1 id="labelSliderResponsivo" className="text-center">
        Slider Responsivos
      </TypographyH1>
      <div className="w-full">
        <Swiper
          aria-labelledby="labelSliderResponsivo"
          slidesPerView={3}
          rewind={true}
          spaceBetween={32}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <GenerateSwiperSliders />
        </Swiper>
      </div>
    </section>
  )
}

export default ExampleSliderSwiperResponsive
