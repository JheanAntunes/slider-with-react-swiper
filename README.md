# Introdução :kite:
Hospedado na vercel [projetoPratica](https://slider-with-react-swiper.vercel.app)

Biblioteca [swiperjs](https://swiperjs.com/migration-guide-v10) version v-10 com elementos personalizados :hammer_and_wrench:

Eu estava procurando interfaces no dribble para fazer e encontrei uma simples que contém slider, por isso comecei a estudar libs que foram construídas para fazer slider :brain:

# Dificuldades :skull:
## Swiper para próximas versões provavelmente vai remover os components Swiper :cursing_face:

> Os componentes do Swiper React provavelmente serão removidos em versões futuras. Recomenda-se migrar para o Swiper Element.
Se você estiver atualizando do Swiper 9 para o Swiper 10, consulte o Guia de migração para o Swiper 10
Se você estiver procurando documentos da v9, eles estão aqui v9.swiperjs.com

### O React ainda não oferece suporte total a componentes web (como na versão 18). Portanto, o uso é basicamente o mesmo do HTML :skull_and_crossbones:

Tem [exemplo](https://swiperjs.com/element) com react para utilizar componentes web na versão 18, porém não funciona :pout:

### solução :astonished:

Passo 01: issue para resolver error de types [Property 'swiper-container' does not exist on type 'JSX.IntrinsicElements'.ts(2339) "swiper": Unknown word.](https://github.com/nolimits4web/swiper/issues/6614)

![swiper-types-conflito](https://github.com/JheanAntunes/slider-with-react-swiper/assets/120582814/ed0cdc15-3083-4880-bb21-a6c316240ee5)

Passo02:  :flushed:
> escolha uma pasta (components) e cria uma pasta com arquivo index.tsx que vai export os componentes que vamos utilizar, exemplo: 
 
![swiper-structure](https://github.com/JheanAntunes/slider-with-react-swiper/assets/120582814/a6efe16e-dc26-4c87-a9b8-ff2a74e077b3)

`
// Copia abaixo: 

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
`

Passo 03: 
![example-estrutura](https://github.com/JheanAntunes/slider-with-react-swiper/assets/120582814/f1fc50eb-fc47-4b1e-ae21-d1b515809b4a)
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
