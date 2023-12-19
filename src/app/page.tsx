import ExampleSliderSwiperAutoScroll from '@/components/ui/example-slider-swiper-auto-scroll'
import ExampleSliderSwiperBasic from '@/components/ui/example-slider-swiper-basic'
import ExampleSliderSwiperResponsive from '@/components/ui/example-slider-swiper-responsive'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 py-8">
      <ExampleSliderSwiperBasic />
      <ExampleSliderSwiperAutoScroll />
      <ExampleSliderSwiperResponsive />
    </main>
  )
}
