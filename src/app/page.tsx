import Image from "next/image";
import Anchor from "./components/anchor";
import PageTemplate from "./components/page-template";

export default function Home() {
  return (
    <main className="px-3 pt-6">
      <PageTemplate title="Hello, I'm Namsraijamts.">
        <div className="flex flex-col md:flex-row justify-between pt-8 md:pt-12">
          <div className="md:w-1/2">
            {/* Contents */}
            <p className="text-lg font-semibold">
              I am a full-stack developer, living in Ulaanbaatar (Mongolia). I
              love trying modern technologies and learning new things.
            </p>

            <p className="text-lg font-semibold my-4">
              And in my spare time, I enjoy taking photos and listening good
              music.
            </p>

            <Anchor href="/resume" text="More about me..." />
          </div>

          <div className="flex items-center justify-center md:items-end md:justify-end md:w-1/2 mt-5 md:mt-0 pt-8 md:pt-0">
            <Image src={"/me.png"} width={250} height={300} alt="me" />
          </div>
        </div>
      </PageTemplate>
    </main>
  );
}
