import Link from 'next/link'
import { Button } from './Button'

export function Footer() {
  return (
    <footer className="bg-secondary pt-20 px-6">
      <div className="container text-white flex flex-col">
        <section className="flex max-lg:flex-col gap-5 px-6 max-sm:px-0 justify-between items-center mb-10 sm:mb-[6.5rem]">
          <h3 className="text-gray-neutral-2 max-w-md text-heading-small leading-tight font-bold">
            Cadastre-se na nossa NewsLetter
          </h3>

          <form className="sm:bg-white max-w-md max-sm:flex-col w-full flex gap-2 sm:items-center justify-between p-1">
            <input
              type="text"
              className="py-3 px-4 outline-0 placeholder:text-neutral text-secondary flex-1"
              placeholder="Digite aqui seu e-mail"
            />

            <Button
              type="submit"
              className="rounded-none py-3 px-6 font-normal text-base"
            >
              Cadastrar
            </Button>
          </form>
        </section>

        <div className="flex flex-wrap max-lg:justify-center max-sm:flex-col max-sm:px-0 justify-around gap-6 pb-16 border-b border-white/20">
          <div className="mr-7">
            <span className="text-[1.625rem] font-black">BellaSkin</span>
            <p className="text-sm/6 opacity-80 mt-7 max-w-[12rem]">
              Florianópolis - Santa Catarina | CEP: 88032-000
            </p>

            <div className="flex items-center gap-5 pt-10">
              <a
                href=""
                target="_blank"
                className="w-10 h-10 grid place-content-center"
              >
                <FacebookLogo />
              </a>

              <a
                href=""
                target="_blank"
                className="w-10 h-10 grid place-content-center"
              >
                <InstagramLogo />
              </a>

              <a
                href=""
                target="_blank"
                className="w-10 h-10 grid place-content-center"
              >
                <TwitterLogo />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-lg">BellaSkin</span>

            <nav className="flex flex-col gap-3">
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Institucional
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Nossos Clubes
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Clínicas
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Blog
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-lg">Suporte</span>

            <nav className="flex flex-col gap-3">
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Fale Conosco (SAC)
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Dúvidas
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Reclamações
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Cancelamento
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Ouvidoria
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-lg">Serviços</span>

            <nav className="flex flex-col gap-3">
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Estética Facial
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Estética Corporal
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Saúde da Pele
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Skin Care Completo
              </Link>
              <Link
                href="#"
                className="opacity-60 text-sm transition-opacity hover:opacity-100"
              >
                Peeling Químico
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-lg">Contato</span>

            <p className="flex flex-col gap-3">
              <span className="opacity-60 text-sm">
                Rua Vitória, 772 - Savassi
              </span>
              <span className="opacity-60 text-sm">Centro de Treinamento</span>
              <span className="opacity-60 text-sm">www.bellaskin.com</span>
              <span className="opacity-60 text-sm">(31) 98046-0909</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap-reverse justify-between py-12">
          <span className="text-sm font-bold opacity-80">
            Todos direitos reservados BellaSkin @2023
          </span>

          <nav className="flex flex-wrap items-center gap-6">
            <Link
              href="#"
              className="text-sm opacity-80 transition-opacity hover:opacity-100 font-bold"
            >
              Institucional
            </Link>
            <Link
              href="#"
              className="text-sm opacity-80 transition-opacity hover:opacity-100 font-bold"
            >
              Serviços
            </Link>
            <Link
              href="#"
              className="text-sm opacity-80 transition-opacity hover:opacity-100 font-bold"
            >
              Suporte
            </Link>
            <Link
              href="#"
              className="text-sm opacity-80 transition-opacity hover:opacity-100 font-bold"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function FacebookLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="99"
      height="100"
      viewBox="0 0 99 100"
      fill="none"
    >
      <g filter="url(#filter0_d_1_45)">
        <path
          d="M49.5 57.2578C60.2696 57.2578 69 48.5274 69 37.7578C69 26.9883 60.2696 18.2578 49.5 18.2578C38.7304 18.2578 30 26.9883 30 37.7578C30 48.5274 38.7304 57.2578 49.5 57.2578Z"
          fill="#1A242E"
        />
        <path
          d="M49.5 57.2578C60.2696 57.2578 69 48.5274 69 37.7578C69 26.9883 60.2696 18.2578 49.5 18.2578C38.7304 18.2578 30 26.9883 30 37.7578C30 48.5274 38.7304 57.2578 49.5 57.2578Z"
          stroke="#1A242E"
        />
      </g>
      <path
        d="M48.4851 43.5249L48.4692 38.6133H46.3799V36.5083H48.4692V35.105C48.4692 33.2111 49.6333 32.2983 51.3102 32.2983C52.1134 32.2983 52.8038 32.3586 53.005 32.3855V34.3648L51.8419 34.3653C50.9299 34.3653 50.7534 34.8019 50.7534 35.4426V36.5083H53.3442L52.6477 38.6133H50.7534V43.5249H48.4851Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1_45"
          x="0"
          y="0.257812"
          width="99"
          height="99"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_45"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_45"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

function InstagramLogo() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_48)">
        <path
          d="M50 57.2578C60.7696 57.2578 69.5 48.5274 69.5 37.7578C69.5 26.9883 60.7696 18.2578 50 18.2578C39.2304 18.2578 30.5 26.9883 30.5 37.7578C30.5 48.5274 39.2304 57.2578 50 57.2578Z"
          fill="#B67659"
        />
        <path
          d="M50 57.2578C60.7696 57.2578 69.5 48.5274 69.5 37.7578C69.5 26.9883 60.7696 18.2578 50 18.2578C39.2304 18.2578 30.5 26.9883 30.5 37.7578C30.5 48.5274 39.2304 57.2578 50 57.2578Z"
          stroke="white"
        />
      </g>
      <g clip-path="url(#clip0_1_48)">
        <path
          d="M52.9255 31.9082H47.0755C45.46 31.9082 44.1505 33.2178 44.1505 34.8332V40.6832C44.1505 42.2986 45.46 43.6082 47.0755 43.6082H52.9255C54.5409 43.6082 55.8505 42.2986 55.8505 40.6832V34.8332C55.8505 33.2178 54.5409 31.9082 52.9255 31.9082Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M52.3402 37.3898C52.4124 37.8767 52.3293 38.3739 52.1026 38.8108C51.8759 39.2477 51.5172 39.602 51.0776 39.8232C50.638 40.0445 50.1397 40.1215 49.6538 40.0434C49.1679 39.9652 48.7189 39.7357 48.3709 39.3877C48.0229 39.0397 47.7935 38.5908 47.7153 38.1048C47.6371 37.6189 47.7141 37.1207 47.9354 36.681C48.1567 36.2414 48.5109 35.8827 48.9478 35.656C49.3847 35.4293 49.8819 35.3462 50.3688 35.4184C50.8654 35.492 51.3252 35.7234 51.6802 36.0784C52.0352 36.4334 52.2666 36.8932 52.3402 37.3898Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <ellipse
          cx="53.2173"
          cy="34.5406"
          rx="0.8775"
          ry="0.8775"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_48"
          x="0.5"
          y="0.257812"
          width="99"
          height="99"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_48"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_48"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1_48">
          <rect
            width="14.04"
            height="14.04"
            fill="white"
            transform="translate(42.9805 30.7383)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function TwitterLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="99"
      height="100"
      viewBox="0 0 99 100"
      fill="none"
    >
      <g filter="url(#filter0_d_1_57)">
        <path
          d="M49.5 57.0376C60.2696 57.0376 69 48.3071 69 37.5376C69 26.768 60.2696 18.0376 49.5 18.0376C38.7304 18.0376 30 26.768 30 37.5376C30 48.3071 38.7304 57.0376 49.5 57.0376Z"
          fill="#1A242E"
        />
        <path
          d="M49.5 57.0376C60.2696 57.0376 69 48.3071 69 37.5376C69 26.768 60.2696 18.0376 49.5 18.0376C38.7304 18.0376 30 26.768 30 37.5376C30 48.3071 38.7304 57.0376 49.5 57.0376Z"
          stroke="#1A242E"
        />
      </g>
      <path
        d="M55.1828 33.9094C54.765 34.1199 54.3471 34.1901 53.8596 34.2603C54.3471 33.9796 54.6953 33.5586 54.8346 32.9973C54.4168 33.2779 53.9293 33.4183 53.3721 33.5586C52.9543 33.1376 52.3275 32.8569 51.7007 32.8569C50.5168 32.8569 49.4721 33.9094 49.4721 35.1724C49.4721 35.3829 49.4721 35.5232 49.5418 35.6636C47.6614 35.5934 45.9203 34.6812 44.806 33.2779C44.5971 33.6288 44.5275 33.9796 44.5275 34.4708C44.5275 35.2426 44.9453 35.9442 45.5721 36.3652C45.2239 36.3652 44.8757 36.2249 44.5275 36.0846C44.5275 37.2072 45.2935 38.1194 46.3382 38.3299C46.1293 38.4 45.9203 38.4 45.7114 38.4C45.5721 38.4 45.4328 38.4 45.2935 38.3299C45.5721 39.242 46.4078 39.9437 47.4525 39.9437C46.6864 40.5752 45.7114 40.926 44.5971 40.926C44.3882 40.926 44.2489 40.926 44.04 40.926C45.0846 41.5575 46.2685 41.9785 47.5221 41.9785C51.7007 41.9785 53.9989 38.4702 53.9989 35.4531C53.9989 35.3829 53.9989 35.2426 53.9989 35.1724C54.4864 34.8216 54.9043 34.4006 55.1828 33.9094Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_1_57"
          x="0"
          y="0.0375977"
          width="99"
          height="99"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_57"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_57"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
