import Link from 'next/link'
import Form from './register-form'
import LandingArticle from './landing-article'

export default function Register() {
  return (
    <main className="flex w-full lg:h-screen">
      <section className="hidden h-full border-r-[1px] border-[var(--lines)] bg-[var(--background-middle)] lg:block lg:w-4/6">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <LandingArticle />
        </div>
      </section>
      <aside className="flex min-h-screen w-full items-center justify-center bg-[var(--background-middle)] md:flex md:items-start md:bg-[var(--background)] md:py-14 lg:w-2/6 lg:items-start lg:overflow-y-scroll">
        <div className="flex h-fit w-screen max-w-[500px] flex-col justify-center rounded-xl bg-[var(--background-middle)] px-6 py-12 md:border md:shadow lg:w-4/5 lg:border-none lg:bg-inherit lg:py-0 lg:shadow-none">
          <h1 className="logo_text">ChronoStation</h1>
          <h4>Cadastro de nova conta</h4>
          <Form />
          <div className="mt-8 block">
            <p className="text-center">Já tem uma conta?</p>
            <Link href={'/login'}>
              <button type="button" className="secondary_button mt-3 w-full">
                Entrar
              </button>
            </Link>
          </div>
          <Link href={'/'} className="tertiary_button mt-4 lg:hidden">
            Ir a Loja
          </Link>
        </div>
      </aside>
    </main>
  )
}
