import Image from 'next/image'
import { ComponentProps } from 'react'
import { ArrowCircleDown } from 'phosphor-react'

import { Button } from '@/components/Button'
import { Texts } from '@/components/Texts'

import { LabelCircleLogo } from '@/assets'
import { Woman3, Woman4, Woman5 } from '@/assets/woman-applying-face-cream'

export function Treatments() {
  return (
    <div className="container px-6 flex max-lg:flex-col-reverse max-lg:items-center max-lg:text-center gap-10 max-lg:gap-16 items-center py-[5.75rem]">
      <div className="max-lg:max-w-3xl">
        <span className="text-primary text-2xl/normal font-roboto font-bold">
          Bem-estar
        </span>
        <Texts.Heading>
          Cuide bem da sua pele com nossos{' '}
          <span className="text-primary">tratamentos especializados</span>
        </Texts.Heading>

        <Texts.Description className="mt-8 mb-12">
          Oferecemos o que há de melhor na área de estética médica, desde
          tecnologias até os mais simples procedimentos. Sua pele mais saudável,
          radiante e rejuvenescida está ao seu alcance.
        </Texts.Description>

        <div className="flex flex-wrap items-center gap-8 max-lg:justify-center">
          <Button className="p-4 whitespace-nowrap">Conhecer Agora</Button>
          <Button className="p-0 text-black shadow-none bg-transparent font-normal flex items-center gap-4">
            Ver Tratamentos <ArrowCircleDown size={40} weight="thin" />
          </Button>
        </div>
      </div>

      <div className="pt-[1.875rem] pl-[1.875rem] relative max-sm:hidden">
        <SubtractGraphicEl className="absolute top-0 left-0" />
        <div className="relative grid p-2 grid-cols-[repeat(2,_max-content)] grid-rows-[max-content_max-content] gap-4">
          <Image
            quality={100}
            className="row-span-full h-full max-w-[18.75rem]"
            src={Woman3}
            alt=""
            width={300}
            height={597}
          />
          <Image
            quality={100}
            src={Woman4}
            alt=""
            className="max-w-[14.8rem] h-full"
            width={237}
            height={300}
          />
          <Image
            quality={100}
            src={Woman5}
            alt=""
            className="max-w-[14.8rem] h-full"
            width={237}
            height={279}
          />
          <Image
            quality={100}
            src={LabelCircleLogo}
            alt="Clínica Especializada"
            width={128}
            height={128}
            className="absolute top-1/2 left-1/2 -translate-x-[27%] -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  )
}

type SubtractGraphicElProps = ComponentProps<'svg'>

function SubtractGraphicEl(props: SubtractGraphicElProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="368"
      height="414"
      viewBox="0 0 368 414"
      fill="none"
      {...props}
    >
      <mask id="path-1-inside-1_1_121" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H368V30H30V414H0V0Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H368V30H30V414H0V0Z"
        fill="#C4C4C4"
      />
      <path
        d="M368 0H398V-30H368V0ZM0 0V-30H-30V0H0ZM368 30V60H398V30H368ZM30 30V0H0V30H30ZM30 414V444H60V414H30ZM0 414H-30V444H0V414ZM368 -30H0V30H368V-30ZM398 30V0H338V30H398ZM30 60H368V0H30V60ZM60 414V30H0V414H60ZM0 444H30V384H0V444ZM-30 0V414H30V0H-30Z"
        fill="url(#paint0_radial_1_121)"
        mask="url(#path-1-inside-1_1_121)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1_121"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(386.103 4.00299e-06) rotate(130.286) scale(568.69 506.217)"
        >
          <stop stop-color="#F9F9F9" />
          <stop offset="0.537861" stop-color="white" stop-opacity="0.71" />
          <stop offset="1" stop-color="#F9F9F9" />
        </radialGradient>
      </defs>
    </svg>
  )
}
