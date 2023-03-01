import Link from "next/link";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div className="md:w-[40rem] md:mx-auto px-8 md:px-0 text-white">
        <h1 className="text-center text-3xl md:text-5xl font-medium hover:underline	mb-4">
          Filmes, séries e muito mais. Sem limites.
        </h1>
        <h3 className="text-lg md:text-2xl font-normal text-center hover:underline	mb-6">
          Assista onde quiser. Cancele quando quiser.
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:mt-0 mt-6 mx-auto md:mx-0">
            <Link href="/browser">
              <button className="bg-red-logo text-white md:text-2xl text-base font-semibold h-16 w-40 rounded-sm md:rounded-none">
                Vamos lá &#62;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
