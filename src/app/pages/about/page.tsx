import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xd:text-6xl/none">
              Ignacio Barraza
            </h1>
            <Link
                href={"https://www.linkedin.com/in/ignacio-barraza-rioja/"}
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-green-500 text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Open to work
            </Link>
            <h2 className="text-3xl font-bold tracking-tighter">Software developer</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I&apos;m a software developer with a passion for building
              innovative web applications. I have a strong background in
              full-stack web development, also I&apos;m always eager to learn
              new technologies and techniques.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href={"https://www.linkedin.com/in/ignacio-barraza-rioja/"}
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact me
              </Link>
              <Link
                href={"https://www.linkedin.com/in/ignacio-barraza-rioja/"}
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                Github
              </Link>
              
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <FontAwesomeIcon icon={faFile} className="mr-2" />
                Download CV
              </Link>
            </div>
          </div>
          <div className="mx-auto w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
          <Image
            src="/zoro.jpeg"
            alt="About"
            width={550}
            height={550}
            className="object-cover"
            style={{ aspectRatio: "550/550", objectFit: "cover" }}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
