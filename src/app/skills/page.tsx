export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the technologies I&apos;m proficient in, showcased in
              a modern and visually appealing way.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 bg-[#0a0a0a] rounded-lg p-6 shadow-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Java</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>C#</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>C/C++</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 bg-[#0a0a0a] rounded-lg p-6 shadow-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Frameworks & Libraries</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Angular</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>NextJS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Express JS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 bg-[#0a0a0a] rounded-lg p-6 shadow-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Tools & Databases</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span>Git</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Docker</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>MySQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
