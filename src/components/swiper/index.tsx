'use client'
import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import type { SwiperProps, SwiperSlideProps } from 'swiper/react'
export function Swiper(props: SwiperProps) {
  const swiperRef = useRef(null)
  const { children, ...rest } = props

  useEffect(() => {
    // Register Swiper web component
    register()

    // pass component props to parameters
    const params = {
      ...rest,
    }

    // Assign it to swiper element
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Object.assign(swiperRef.current, params)

    // initialize swiper
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    swiperRef.current.initialize()
  }, [rest])

  return (
    <swiper-container init={false} ref={swiperRef}>
      {children}
    </swiper-container>
  )
}
export function SwiperSlide(props: SwiperSlideProps) {
  const { children, ...rest } = props

  return (
    <swiper-slide {...rest}>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/* @ts-ignore */}
      {children}
    </swiper-slide>
  )
}
