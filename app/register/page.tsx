import Link from 'next/link'
import Form from './register-form'
import LandingArticle from './landing-article'

export default function Register() {
  return (
    <main className="flex w-full lg:h-screen">
    <section className="h-full hidden border-r-[1px] border-[var(--lines)] bg-[var(--background-middle)] lg:block lg:w-4/6">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <LandingArticle />
        </div>
      </section>
      <aside className="lg:overflow-y-scroll flex min-h-screen w-full items-center justify-center bg-[var(--background-middle)] md:flex md:items-start md:bg-[var(--background)] md:py-14 lg:w-2/6 lg:items-start">
        <div className="flex h-fit w-screen max-w-[500px] flex-col justify-center rounded-xl bg-[var(--background-middle)] px-6 py-32 sm:py-12 md:border md:shadow lg:w-4/5 lg:border-none lg:shadow-none lg:bg-inherit lg:py-0">
          <h1 className="logo_text">ChronoStation</h1>
          <h4>Cadastro de nova conta</h4>
          <Form />
          <div className="mt-8 block">
            <p className="text-center">Já tem uma conta?</p>
            <Link href={'/login'}>
              <button className="secondary_button mt-3 w-full">Entrar</button>
            </Link>
          </div>
        </div>
      </aside>
    </main>
  )
}
