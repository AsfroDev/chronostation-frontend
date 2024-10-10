'use client'

import { useEffect, useState } from 'react'

export default function LandingArticle() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <article className="w-4/5 space-y-12">
        <section>
          <h1
            className={`large_md_text duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Ao se cadastrar, você aproveita:
          </h1>
          <h1
            className={`medium_text mt-6 w-full leading-tight transition-opacity delay-[1s] duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Vantagens
          </h1>
          <p
            className={`mt-2 w-full transition-opacity delay-[1.5s] duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Tenha acesso a ofertas exclusivas, compras mais rápidas e um
            histórico de pedidos fácil de acessar.
          </p>
        </section>
        <section>
          <h1
            className={`medium_text w-full leading-tight transition-opacity delay-[3s] duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Benefícios
          </h1>
          <p
            className={`mt-2 w-full transition-opacity delay-[3.5s] duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Ganhe um cupom de 5% de desconto na sua primeira compra após
            realizar o cadastro.
          </p>
        </section>
        <section>
          <h1
            className={`medium_text w-full leading-tight transition-opacity delay-[5s] duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Experiência aprimorada
          </h1>
          <p
            className={`mt-2 w-full transition-opacity delay-[5.5s] duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Gerencie suas informações facilmente e tenha uma experiência de
            compra mais prática.
          </p>
        </section>
      </article>
    </>
  )
}
