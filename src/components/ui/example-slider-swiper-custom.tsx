import Img1 from '@/assets/img-1.jpg'
import Img2 from '@/assets/img-2.jpg'
import Img3 from '@/assets/img-3.jpg'
import ImgClientContrato from '@/assets/img-client-contrato.jpg'
import ImgClientDepoimento from '@/assets/img-client-depoimento.jpg'
import Image from 'next/image'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from '../swiper'

function ExampleSliderSwiperCustom() {
  return (
    <div className="w-full max-w-2xl">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={true}
        speed={500}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={Img1}
              alt="descriptionImage"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={Img2}
              alt="descriptionImage"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={Img3}
              alt="descriptionImage"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={ImgClientContrato}
              alt="descriptionImage"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={ImgClientDepoimento}
              alt="descriptionImage"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ExampleSliderSwiperCustom
