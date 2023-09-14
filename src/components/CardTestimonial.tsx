import Image, { StaticImageData } from 'next/image'
import { Star } from 'phosphor-react'
import { ReactNode } from 'react'

interface CardTestimonialProps {
  children: ReactNode
  numberStars: number
  img: StaticImageData
  name: string
}

export function CardTestimonial({
  children,
  numberStars,
  img,
  name,
}: CardTestimonialProps) {
  const arrStars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className="relative text-stone-800">
      <Quotes />

      <div className="relative z-10 w-full max-w-2xl bg-white shadow-[0px_0px_230px_0px_rgba(89,104,118,0.08)] px-10 py-7">
        <div className="rounded-full -mt-16 w-24 h-24 border-[1.875px] border-white shadow-[6px_8px_15px_0px_rgba(108, 126, 147, 0.10)]">
          <Image
            src={img}
            alt=""
            width={64}
            height={64}
            className="h-full w-full object-cover"
            quality={100}
          />
        </div>

        <p className="leading-relaxed mb-6">{children}</p>

        <div className="flex items-center gap-2 mb-3">
          {arrStars.map((number) => (
            <Star
              key={number}
              weight="fill"
              className={`${
                numberStars >= number
                  ? 'text-primary'
                  : 'text-[#70758F] opacity-30'
              } w-5 h-5`}
            />
          ))}
        </div>

        <strong className="font-bold">{name}</strong>
      </div>

      <div
        className="bg-white absolute -bottom-7 left-1/2 -translate-x-1/2 max-w-[26rem] w-full h-full shadow-[0px_5px_220px_0px_rgba(89,104,118,0.10)]"
        aria-hidden
      />
    </div>
  )
}

function Quotes() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="70"
      viewBox="0 0_fill=_none"
      className="absolute -top-14 left-1/2 -translate-x-1/2"
      aria-hidden
    >
      <path
        d="M80.5302 59.9725C88.8268 51.0125 87.9915 39.5062 87.9651 39.375V26.25V4.375C87.9651 1.96 85.9997 0 83.5684 0H57.1881C52.3385 0 48.3946 3.92437 48.3946 8.75V39.375C48.3946 41.79 50.36 43.75 52.7914 43.75H57.1881H66.3244C66.2321 45.5088 65.7837 47.74 64.4383 49.8575C62.2047 53.3619 57.9971 55.755 51.9252 56.9625L48.3946 57.6625V70H52.7914C65.0274 70 74.3616 66.6269 80.5302 59.9725ZM32.1356 59.9725C40.4366 51.0125 39.5968 39.5062 39.5704 39.375V26.25V4.375C39.5704 1.96 37.6051 0 35.1737 0H8.79343C3.94385 0 0 3.92437 0 8.75V39.375C0 41.79 1.96533 43.75 4.39672 43.75H8.79343H17.9298C17.8375 45.5088 17.389 47.74 16.0436 49.8575C13.8101 53.3619 9.60243 55.755 3.53056 56.9625L0 57.6625V70H4.39672C16.6328 70 25.967 66.6269 32.1356 59.9725Z"
        fill="black"
        fill-opacity="0.05"
      />
    </svg>
  )
}
