import Image from 'next/image'
import { Star } from 'phosphor-react'

import { Line } from '@/components/Line'
import { Texts } from '@/components/Texts'
import { CardTestimonial } from '@/components/CardTestimonial'

import {
  person1,
  person2,
  person3,
  person4,
  person5,
} from '@/assets/testimonials-img'
import { partners } from '@/assets/partners'

export function Testimonials() {
  return (
    <div className="bg-white">
      <div className="container py-28 flex flex-col gap-24">
        <div className="flex items-center gap-[7.5rem] px-5">
          <CardTestimonial img={person1} name="Roberta Ricci" numberStars={4}>
            Clinica excelente! Realiza transformações com responsabilidade e
            avaliação técnica! Super recomendo! Amei os resultados!
          </CardTestimonial>

          <div className="flex flex-col gap-4">
            <Line />
            <Texts.Heading className="font-bold">
              Confira o que nossos{' '}
              <span className="text-primary">pacientes</span> dizem
            </Texts.Heading>
            <Texts.Description className="max-w-md">
              Descubra como transformamos vidas e elevamos a autoestima de
              nossos clientes.
            </Texts.Description>
            <div className="flex items-start h-[3.125rem] my-4 overflow-hidden">
              <div className="h-[4.8rem] -translate-y-2 w-[3.125rem]">
                <Image
                  className="w-full h-full object-cover"
                  quality={100}
                  src={person2}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="h-[3.125rem]  w-[3.125rem] -translate-x-5">
                <Image
                  className="w-full h-full object-cover"
                  quality={100}
                  src={person3}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="h-[3.125rem]  w-[3.125rem] -translate-x-8">
                <Image
                  className="w-full h-full object-cover"
                  quality={100}
                  src={person4}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="h-[3.125rem]  w-[3.125rem] -translate-x-10">
                <Image
                  className="w-full h-full object-cover"
                  quality={100}
                  src={person5}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-primary w-5 h-5" weight="fill" />
              <p className="text-xl font-bold">
                4.9{' '}
                <span className="text-neutral font-normal">
                  (+500 Avaliações)
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between">
          {partners.map((partner, index) => (
            <Image
              key={index}
              quality={100}
              src={partner}
              alt=""
              width={164}
              height={82}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
