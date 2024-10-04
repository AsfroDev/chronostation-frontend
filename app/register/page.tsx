import Link from "next/link";
import Form from "./register-form";

export default function Register() {
  return (
    <main className="flex w-full">
      <section className="hidden lg:block lg:w-4/6 border-r-[1px] border-[var(--lines)] bg-[var(--background-middle)]">
        SIDELEFT
      </section>
      <aside className="h-fit w-full lg:w-2/6 md:flex justify-center items-center flex md:py-16">
        <div className="max-w-[500px] h-fit flex-col flex justify-center w-screen lg:w-fit bg-[var(--background-middle)] px-6 py-32 sm:py-12 rounded-xl shadow-lg">
          <h1 className="large_text">NotesWA</h1>
          <h4>Cadastro de nova conta</h4>
          <Form />
          <div className="block mt-8">
            <p className="text-center">Já tem uma conta?</p>
            <Link href={"/login"}>
              <button className="secondary_button w-full mt-3">
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </main>
  );
}