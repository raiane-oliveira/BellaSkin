import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { List, X } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex py-7 px-6 justify-between items-center text-white">
      <span className="font-black text-[1.625rem]">BellaSkin</span>

      <nav className="hidden lg:flex items-center gap-14">
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

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger className="lg:hidden">
          <List className="w-8 h-8" />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 grid bg-black/20">
            <Dialog.Content
              className={`bg-primary data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut duration-300 text-white shadow-[-4px_0px_30px_0px_rgba(0,0,0,0.80)] flex flex-col p-6 max-w-xs h-full w-full ml-auto`}
            >
              <Dialog.Close className="ml-auto">
                <X className="w-8 h-8" />
              </Dialog.Close>
              <nav className="flex flex-col py-6 items-end gap-6">
                <Link
                  href="/"
                  className="text-xl border-b-white border-b hover:border-b-white duration-300 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <a
                  className="text-xl transition-colors border-transparent border-b hover:border-b-white duration-300"
                  href="#about"
                  onClick={() => setOpen(false)}
                >
                  Sobre
                </a>
                <a
                  className="text-xl transition-colors border-transparent border-b hover:border-b-white duration-300"
                  href="#services"
                  onClick={() => setOpen(false)}
                >
                  Serviços
                </a>
                <a
                  className="text-xl transition-colors border-transparent border-b hover:border-b-white duration-300"
                  href="#contact"
                  onClick={() => setOpen(false)}
                >
                  Contato
                </a>
                <a
                  href="#talk-with-us"
                  className="text-xl font-medium transition-colors hover:bg-white duration-200 hover:text-secondary py-3 px-4 rounded-sm border border-white"
                  onClick={() => setOpen(false)}
                >
                  Fale Conosco
                </a>
              </nav>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  )
}
