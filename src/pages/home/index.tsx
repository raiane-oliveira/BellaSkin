import Image from 'next/image'
import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { CheckSquare } from 'phosphor-react'

import { Header } from '@/components/Header'
import { Hero } from './components/Hero'
import { Line } from '@/components/Line'
import { Texts } from '@/components/Texts'
import { Services } from './components/Services'
import { Treatments } from './components/Treatments'

import {
  Cosmetics,
  Dough,
  Eyebrow,
  Lip,
  MakeUp,
  Nails,
  HightLight,
  ArrowSpinning,
  CircleBg,
} from '@/assets/icons'
import { WomanV } from '@/assets'
import { Testimonials } from './components/Testimonials'

export default function Home() {
  return (
    <>
      <div className="bg-secondary relative overflow-hidden">
        <div className="container relative z-10">
          <Header />
          <Hero />
        </div>

        <div className="bg-primary absolute -bottom-[53.75rem] -right-[37.5rem] blur-[400px] rounded-full w-[91rem] h-[91rem]" />
      </div>

      <main>
        <div className="overflow-hidden container bg-gray-neutral shadow-[0px_10px_50px_0px_rgba(160,160,160,0.10)] grid gap-px grid-cols-3 -mt-56 relative z-10 max-w-6xl w-full rounded-[0.625rem]">
          <BoxFeatures icon={Eyebrow} feature="Design de Sobrancelhas" />
          <BoxFeatures icon={Nails} feature="Tratamento de Unhas" />
          <BoxFeatures icon={Lip} feature="Lip Blush Permanente" />
          <BoxFeatures icon={Dough} feature="Depilação Facial" />
          <BoxFeatures
            className="bg-secondary text-white"
            icon={MakeUp}
            feature="Hidratação Facial"
          />
          <BoxFeatures icon={Cosmetics} feature="Skin Care Completo" />
        </div>

        <div
          id="about"
          className="max-w-[1440px] mx-auto flex items-center gap-10 pt-20 pr-16"
        >
          <div className="relative overflow-hidden max-w-[53rem] w-full">
            <Image
              src={WomanV}
              alt=""
              width={852}
              height={639}
              className="object-cover"
              quality={100}
            />
            <Image
              src={CircleBg}
              className="absolute -bottom-14 -z-10 left-[48%] -translate-x-1/2 min-h-[35rem] min-w-[34rem]"
              aria-hidden
              alt=""
              width={553}
              height={562}
            />

            <Image
              src={HightLight}
              alt=""
              className="absolute top-16 left-64"
              aria-hidden
              width={55}
              height={55}
            />

            <Image
              src={ArrowSpinning}
              alt=""
              className="absolute bottom-36 right-0"
              aria-hidden
              width={148}
              height={151}
            />
          </div>

          <div className="mt-10">
            <Line className="mb-4" />

            <section className="grid grid-cols-2">
              <Texts.Heading className="col-span-full">
                Cuidar da beleza é essencial para sua{' '}
                <span className="text-primary">autoestima!</span>
              </Texts.Heading>

              <Texts.Description className="font-semibold text-2xl col-span-full mt-6 mb-5">
                Descubra como a <span className="text-primary">beleza</span> e o{' '}
                <span className="text-primary">bem-estar</span> se unem para
                elevar a sua confiança.
              </Texts.Description>

              <Texts.Description className="col-span-full mb-9">
                Realce sua beleza exterior e transforme sua autoestima com
                nossos serviços personalizados.
              </Texts.Description>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <CheckSquare
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                  <span className="text-lg">Estética Facial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                  <span className="text-lg">Saúde da Pele</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                  <span className="text-lg">Toxina Botulínica</span>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <CheckSquare
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                  <span className="text-lg">Estética Corporal</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                  <span className="text-lg">Harmonização Facial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckSquare
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                  <span className="text-lg">Peeling Químico</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Services />
        <Treatments />
        <Testimonials />
      </main>
    </>
  )
}

interface BoxFeaturesProps extends ComponentProps<'div'> {
  icon: ElementType
  feature: string
}

function BoxFeatures({ icon: Icon, feature, ...props }: BoxFeaturesProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'grid bg-white gap-7 text-center place-content-center place-items-center py-14 px-20',
        props.className,
      )}
    >
      <Icon className="w-[2.625rem] h-[2.625rem]" />
      <span className="font-bold text-xl">{feature}</span>
    </div>
  )
}
