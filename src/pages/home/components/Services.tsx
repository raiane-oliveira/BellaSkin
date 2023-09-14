'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ComponentProps, ReactNode, useState } from 'react'
import { ArrowCircleRight } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'
import { twMerge } from 'tailwind-merge'

import { Line } from '@/components/Line'
import { Texts } from '@/components/Texts'

import { Woman1, Woman2 } from '@/assets/woman-applying-face-cream'
import { WomanPerfil } from '@/assets'

import 'keen-slider/keen-slider.min.css'

export function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSliderLoaded, setIsSliderLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 'auto',
      spacing: 30,
    },
    created() {
      setIsSliderLoaded(true)
    },
  })

  const endSlide =
    isSliderLoaded && instanceRef.current
      ? instanceRef.current.track.details.slides.length - 2
      : 0

  const rateSlide = Math.min((currentSlide + 1) / endSlide, 1)

  return (
    <div className="bg-secondary pt-28 pb-14" id="services">
      <div className="text-white">
        <div className="container mb-14">
          <Line className="bg-white mb-2" />

          <div className="flex justify-between items-end">
            <Texts.Heading className="max-w-lg">
              Conheça <span className="text-primary">nossos principais</span>{' '}
              serviços para você
            </Texts.Heading>

            <Link href="/" className="flex items-center gap-5">
              <Texts.Description>Ver Todos Serviços</Texts.Description>
              <ArrowCircleRight className="w-10 h-10" weight="thin" />
            </Link>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="keen-slider h-[27rem] carousel-container ml-auto"
        >
          <BoxServices
            title="Hidratação Facial"
            category="Rosto"
            style={{ minWidth: 558, width: '100%' }}
          >
            <Image
              quality={100}
              src={Woman1}
              alt=""
              className="h-full object-cover"
              width={558}
              height={434}
            />
          </BoxServices>

          <BoxServices
            title="Estética Corporal"
            category="Corpo"
            style={{ minWidth: 362, width: '100%' }}
          >
            <Image
              quality={100}
              src={WomanPerfil}
              alt=""
              width={362}
              height={434}
            />
          </BoxServices>

          <BoxServices
            title="Saúde da Pele"
            category="Pele"
            style={{ minWidth: 362, width: '100%' }}
          >
            <Image quality={100} src={Woman2} alt="" width={362} height={434} />
          </BoxServices>

          <BoxServices
            title="Hidratação Facial"
            category="Rosto"
            style={{ minWidth: 558, width: '100%' }}
          >
            <Image
              quality={100}
              src={Woman1}
              alt=""
              className="h-full object-cover"
              width={558}
              height={434}
            />
          </BoxServices>

          <BoxServices
            title="Estética Corporal"
            category="Corpo"
            style={{ minWidth: 362, width: '100%' }}
          >
            <Image
              quality={100}
              src={WomanPerfil}
              alt=""
              width={362}
              height={434}
            />
          </BoxServices>

          <BoxServices
            title="Saúde da Pele"
            category="Pele"
            style={{ minWidth: 362, width: '100%' }}
          >
            <Image quality={100} src={Woman2} alt="" width={362} height={434} />
          </BoxServices>
        </div>

        <div className="flex items-center mt-14 gap-3 container">
          {instanceRef.current && isSliderLoaded && (
            <Texts.Description className="text-white/50">
              <span className="text-white">01</span> de{' '}
              {String(instanceRef.current.track.details.slides.length).padStart(
                2,
                '0',
              )}
            </Texts.Description>
          )}

          {instanceRef.current && isSliderLoaded && (
            <div className="max-w-5xl w-full bg-white/30">
              <div
                className="bg-white rounded relative h-[0.09rem] w-0 transition-[width] duration-300"
                style={{ width: String(100 * rateSlide) + '%' }}
              >
                <div
                  className="absolute rounded-full right-0 top-1/2 -translate-y-1/2 bg-white w-[0.625rem] h-[0.625rem]"
                  aria-hidden
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface BoxServicesProps extends ComponentProps<'div'> {
  children: ReactNode
  title: string
  category: string
}

function BoxServices({
  children,
  title,
  category,
  ...props
}: BoxServicesProps) {
  return (
    <div
      {...props}
      className={twMerge('relative keen-slider__slide', props.className)}
    >
      {children}

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(182, 118, 89, 0.00) 0%, rgba(73, 36, 19, 0.64) 78.65%, #2C0E00 100%)',
        }}
        aria-hidden
      />

      <div className="absolute bottom-7 left-6">
        <strong className="text-[2rem] font-bold">{title}</strong>
        <div className="flex items-end gap-2">
          <Line className="h-[0.0625rem] translate-y-1 bg-white" />
          <span className="text-white/60 text-lg flex-1">{category}</span>
        </div>
      </div>
    </div>
  )
}
