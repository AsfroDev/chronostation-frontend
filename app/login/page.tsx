import Link from "next/link";
import Form from "./form";

export default function Login() {
  return (
    <main className="flex w-full">
      <section className="hidden lg:block lg:w-4/6 border-r-[1px] border-[var(--lines)] bg-[var(--background-middle)]">
        SIDELEFT
      </section>
      <aside className="min-h-screen w-full lg:w-2/6 flex justify-center items-center flex-col">
        <div className="w-screen h-screen flex-col flex justify-center sm:h-fit lg:h-fit max-w-[500px] lg:w-fit bg-[var(--background-middle)] px-6 py-12 rounded-xl shadow-lg">
          <h1 className="large_text">NotesWA</h1>
          <h4>Entrar na sua conta</h4>
          <Form />
          <div className="block mt-8">
            <p className="text-center">Sua primeira vez aqui?</p>
            <Link href={"/register"}>
              <button className="secondary_button w-full mt-3">
                Crie uma conta
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </main>
  );
}
