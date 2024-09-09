export default function WorkExperience() {
  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out my work history and the companies I&apos;ve been a part
              of.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 grid gap-10">
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium">February 2023 - Present</div>
              <div className="font-semibold">Full Stack Developer.</div>
              <div className="text-muted-foreground">
                Lazarillo - MapVX, Santiago - Chile
              </div>
              <div className="text-muted-foreground">
                Develop and maintain web applications using Angular, Node.js,
                and Firebase. Collaborate with cross-functional teams to deliver
                high-quality software.
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium">August 2024 - Present</div>
              <div className="font-semibold">
                Assistant course Introduction to Project Formulation.
              </div>
              <div className="text-muted-foreground">
                Universidad de Tarapacá, Iquique - Chile
              </div>
              <div className="text-muted-foreground">
                Assistant in the field of Introduction to Project Formulation.
                This course is based on generating robotics and related
                projects. Support in robotics workshops, guiding students in
                doubts they have regarding code or hardware with which they
                work.
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium">August 2024 - Present</div>
              <div className="font-semibold">Assistant course TICs.</div>
              <div className="text-muted-foreground">
                Universidad de Tarapacá, Iquique - Chile
              </div>
              <div className="text-muted-foreground">
                Assistant of the Knowledge Integration Workshop (TICs in spanish). Course based on
                process modeling with BMPN and BPMS. Support in workshops,
                solving doubts about the use of Bisagi and how to model
                processes using different BPMN and BPMS.
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium">March 2024 - July 2024</div>
              <div className="font-semibold">Assistant course DataBase.</div>
              <div className="text-muted-foreground">
                Universidad de Tarapacá, Iquique - Chile
              </div>
              <div className="text-muted-foreground">
                Database Assistant in the Engineering and Technology Department,
                supporting course activities like creating questionnaires,
                grading, and resolving student queries. Helped enhance
                students&apos; understanding and performance in the course.
              </div>
            </div>
            <div className="grid gap-1 text-sm relative">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
              <div className="font-medium">January 2024 - February 2024</div>
              <div className="font-semibold">Intern, Front-end Developer.</div>
              <div className="text-muted-foreground">
                Lazarillo, Santiago - Chile
              </div>
              <div className="text-muted-foreground">
                Front-End Developer Intern at Lazarillo, responsible for
                developing a metrics dashboard and working with Firebase
                database integration. Focused on tracking user and app metrics
                to support data-driven decision-making.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
