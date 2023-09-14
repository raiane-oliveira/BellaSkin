import Link from 'next/link'

export function Header() {
  return (
    <header className="flex py-7 px-4 justify-between items-center text-white">
      <span className="font-black text-[1.625rem]">BellaSkin</span>

      <nav className="flex items-center gap-14">
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
        <a
          className="text-lg transition-colors duration-200 hover:text-white text-neutral"
          href="#about"
        >
          Sobre
        </a>
        <a
          className="text-lg transition-colors duration-200 hover:text-white text-neutral"
          href="#services"
        >
          Serviços
        </a>
        <a
          className="text-lg transition-colors duration-200 hover:text-white text-neutral"
          href="#contact"
        >
          Contato
        </a>
        <a
          href="#talk-with-us"
          className="text-lg font-medium transition-colors hover:bg-white duration-200 hover:text-secondary py-3 px-4 rounded-sm border border-white"
        >
          Fale Conosco
        </a>
      </nav>
    </header>
  )
}
