import Link from 'next/link'
import Form from './login-form'
import LandingArticle from './landing-article'

export default function Login() {
  return (
    <main className="flex w-full">
      <section className="hidden border-r-[1px] border-[var(--lines)] bg-[var(--background-middle)] lg:block lg:w-4/6">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <LandingArticle />
        </div>
      </section>
      <aside className="flex min-h-screen w-full flex-col items-center justify-center bg-[var(--background-middle)] md:bg-[var(--background)] lg:w-2/6">
        <div className="flex h-screen w-screen max-w-[500px] flex-col justify-center rounded-xl bg-[var(--background-middle)] px-6 py-12 sm:h-fit md:border md:shadow lg:h-fit lg:w-4/5 lg:border-none lg:bg-inherit lg:shadow-none">
          <h1 className="logo_text">ChronoStation</h1>
          <h4>Entrar na sua conta</h4>
          <Form />
          <div className="mt-8 block">
            <p className="text-center">Sua primeira vez aqui?</p>
            <Link href={'/register'}>
              <button type="button" className="secondary_button mt-3 w-full">
                Crie uma conta
              </button>
            </Link>
          </div>
          <Link href={'/'} className='tertiary_button mt-4 lg:hidden'>Ir a Loja</Link>
        </div>
      </aside>
    </main>
  )
}
