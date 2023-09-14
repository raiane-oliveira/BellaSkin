import Image from 'next/image'
import { ArrowCircleDown } from 'phosphor-react'

import { Button } from '@/components/Button'
import { Texts } from '@/components/Texts'

import { WomanHero } from '@/assets'

export function Hero() {
  return (
    <div className="pt-20">
      <div className="flex max-lg:flex-col max-lg:gap-16 max-lg:text-center text-white">
        <section className="flex mt-16 max-lg:px-6 lg:pl-6 max-lg:items-center flex-col gap-6 max-lg:max-w-3xl max-lg:mx-auto">
          <h1 className="relative text-heading leading-[4.375rem] font-extrabold">
            Sua beleza começa com uma pele saudável
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="27"
              viewBox="0 0 54 27"
              fill="none"
              className="absolute w-12 h-7 -z-10 -top-1 left-48"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54 27L45.1044 27C45.1044 17.0012 36.9988 8.89552 27 8.89552C17.0012 8.89552 8.89552 17.0012 8.89552 27C8.89552 27 8.89552 27 8.89552 27H0C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27Z"
                fill="#B67659"
              />
            </svg>
          </h1>

          <Texts.Description className="max-lg:max-w-lg">
            Descubra o segredo de uma pele radiante com nossos tratamentos e
            cuidados especializados.
          </Texts.Description>

          <div className="flex mt-2 items-center gap-8 max-lg:flex-wrap max-lg:justify-center mx-auto lg:mx-0">
            <Button>Saiba Mais</Button>
            <Button className="p-0 bg-transparent font-normal flex items-center gap-4">
              Ver Tratamentos <ArrowCircleDown size={40} weight="thin" />
            </Button>
          </div>
        </section>

        <div className="lg:w-[60.5rem] lg:h-[47.25rem] relative">
          <Image
            src={WomanHero}
            alt=""
            width={952}
            height={756}
            className="object-cover w-full h-full relative z-10 min-h-[30rem]"
            quality={100}
          />

          <RectangleElement />
          <ArrowElement />
        </div>
      </div>
    </div>
  )
}

function RectangleElement() {
  return (
    <svg
      width="614"
      height="373"
      viewBox="0 0 614 373"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-64 lg:top-44 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:w-[36rem] min-h-[23rem]"
    >
      <path
        d="M0 262.5C0 117.525 117.525 3.05176e-05 262.5 3.05176e-05H351.5C496.475 3.05176e-05 614 117.525 614 262.5V373H0V262.5Z"
        fill="white"
        fill-opacity="0.3"
      />
      <path
        d="M2 262.5C2 118.63 118.63 2.00003 262.5 2.00003H351.5C495.37 2.00003 612 118.63 612 262.5V371H2V262.5Z"
        stroke="white"
        stroke-opacity="0.4"
        stroke-width="4"
      />
    </svg>
  )
}

function ArrowElement() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="161"
      height="121"
      viewBox="0 0 161 121"
      fill="none"
      className="absolute lg:-right-20 top-48 right-6 max-sm:w-24 max-sm:h-24 max-sm:right-0"
    >
      <path
        opacity="0.5"
        d="M140.898 72.7969C140.936 72.6605 140.977 72.528 141.011 72.3879C146.153 52.5131 134.215 40.8774 120.324 35.6341C111.233 32.2012 99.8351 31.0487 87.5105 34.2319C85.781 20.677 76.1776 10.6079 65.2729 6.37815C53.3345 1.7475 37.9639 2.86223 21.8602 8.85493C22.0793 7.81757 22.3209 6.76538 22.6087 5.69733C22.7917 5.02199 22.6841 4.5533 22.4185 4.2499C22.6348 3.67016 22.8511 3.09042 23.0937 2.49964C23.8448 0.688657 21.6642 -0.0151151 20.1173 1.52135C13.9111 7.68583 7.67834 13.8237 1.4556 19.9592C0.178698 21.2186 -0.218199 23.1232 1.21965 23.257C2.35386 23.3605 3.48807 23.4639 4.6285 23.5611C4.97796 23.849 5.50165 23.963 6.15731 23.786C6.24742 23.7643 6.33996 23.7326 6.42628 23.7071C10.3831 24.025 14.3659 24.2943 18.418 24.4339C20.0258 24.4891 21.5751 22.1088 20.6545 21.398C20.7467 21.1544 20.7975 20.9066 20.7868 20.6595C20.703 18.348 20.7955 15.9892 21.0794 13.5607C47.2021 3.72996 70.5463 8.37602 79.498 26.9637C80.6914 29.4411 81.7073 32.4748 82.2967 35.828C79.4507 36.8345 76.5712 38.0563 73.6625 39.5725C60.599 46.3585 39.2954 66.2812 50.0375 75.388C60.6232 84.363 81.1735 65.6394 85.9223 50.4238C87.2653 46.1195 87.8325 42.0211 87.7833 38.1514C108.369 33.0896 127.309 40.6158 134.772 53.3442C137.416 57.8602 138.48 64.227 137.284 71.0678C127.186 66.7378 113.94 65.277 101.193 78.6899C89.1098 91.4107 93.0504 106.882 105.44 106.166C119.127 105.367 133.631 91.0645 139.345 77.2647C140.033 77.6548 140.707 78.0435 141.377 78.4285C153.159 85.1929 163.987 98.2926 151.618 118.954C150.427 120.946 152.993 121.265 154.215 119.303C166.706 99.2623 158.805 84.3782 147.538 76.8111C145.649 75.5283 143.405 74.1143 140.898 72.7969ZM69.8543 68.1374C63.3165 73.3973 55.2389 74.6381 52.6046 69.8088C49.0679 63.3411 59.6894 52.777 66.936 47.7419C72.1583 44.1135 77.4832 41.4589 82.7605 39.6402C83.366 48.7837 80.5233 59.5498 69.8543 68.1374ZM124.568 93.1975C111.973 104.609 94.4511 105.249 98.4655 89.4095C101.043 79.249 112.958 72.5939 121.255 72.0209C127.021 71.6248 131.841 73.3552 136.184 75.5537C134.271 81.6017 130.55 87.7794 124.568 93.1975Z"
        fill="white"
      />
    </svg>
  )
}
