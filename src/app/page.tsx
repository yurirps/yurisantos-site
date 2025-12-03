import Navbar from "@/components/header/navbar";
import Habilidades from "@/components/perfil/habilidades";
import Sobre from "@/components/perfil/sobre";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Navbar />
          <Sobre />
          <Habilidades />
        </section>
      </main>
    </>
  );
}
