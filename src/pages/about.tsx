import { Button } from "@/components/ui/button"

export const About = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <img src="" alt="About" width={"550px"} height={"550px"} className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"/>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xd:text-6xl">
              Ignacio Barraza
            </h1>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
              Software Developer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I'm a software developer with a passion for building innovative web applications. I have a strong background in TypeScipt, React, NodeJS and others frameworks and programming languages, also I'm always eager to learn new technologies and techniques.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              In addition to my technical skills, I'm a problem-solver at heart and I enjoy tackling complex challenges and finding creative solutions.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
