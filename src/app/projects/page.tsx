import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="w-full py-12 md:py24 lg:py-32">
      <div className="container px-4 md:px-6 sm:mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I&apos;ve worked on.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="rounded-lg shadow-md overflow-hidden bg-muted">
            <Link href="/projects/black-shark-web" prefetch={false}>
              <Image
                src="/proyecto_bsw.png"
                width="700"
                height="500"
                alt="Project BSW"
                className="w-full h-72 object-cover"
                style={{ aspectRatio: "700/500", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">Black Shark Web</h3>
                <p className="text-muted-foreground text-sm">
                  E-commerce platform
                </p>
              </div>
            </Link>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden bg-muted">
            <Link href="/projects/tech-challenge" prefetch={false}>
              <Image
                src="/tech_challenge.png"
                width="700"
                height="500"
                alt="tech challenge"
                className="w-full h-72 object-cover"
                style={{ aspectRatio: "700/500", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">Tech Challenge Lazarillo</h3>
                <p className="text-muted-foreground text-sm">
                  Tech challenge for full stack position at Lazarillo
                </p>
              </div>
            </Link>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden bg-muted">
            <Link href="/projects/anime-hub" prefetch={false}>
              <Image
                src="/anime_hub.png"
                width="700"
                height="500"
                alt="Anime Hub"
                className="w-full h-72 object-cover"
                style={{ aspectRatio: "700/500", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">Anime Hub</h3>
                <p className="text-muted-foreground text-sm">
                  A web application for otakus, anime & manga lovers
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
