"use client"
import { notFound } from "next/navigation"
import projectData from "@/data/project-data.json"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import Footer from "@/components/footer"
import { ProjectStack } from "./projectStack"
import { useState } from "react"
import { ImageModal } from "./imageModal"

interface ProjectPageProps {
  params: {
    project: string
  }
}

export default function Project({ params }: ProjectPageProps) {
  const project = projectData.find((p) => p.id === params.project)
  const [selectedImage, setSelectedImage] = useState<string>("")

  if (!project) return notFound()

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc)
  }

  const closeModal = () => {
    setSelectedImage("")
  }

  return (
    <>
      <header className="flex px-4 lg:px-6 h-20 items-center sm:border-b">
        <div className="hidden w-full lg:flex gap-4 sm:gap-6 lg:justify-between">
          <Link
            href={"/"}
            className="flex items-center justify-center"
            prefetch={false}
          >
            <FontAwesomeIcon icon={faCode} className="w-10 h-10" />
            <span className="sr-only">Ignacio Barraza&apos;s portfolio</span>
          </Link>
          <Link
            href={"/"}
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Go back
          </Link>
        </div>
      </header>
      <section id="detailed-project" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-xl">
                Featured Project
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                {project.title}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                {project.content}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href={project.demo}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  target="blank"
                >
                  View Demo
                </Link>
                <Link
                  href={project.sourceCode}
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  target="blank"
                >
                  View Code
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-xl">
                Technologies Used
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ProjectStack stack={project.stack} />
              </div>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-xl">
                Screenshots
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src={project.image}
                  width={300}
                  height={200}
                  alt={project.title}
                  className="aspect-video overflow-hidden object-cover object-center"
                  style={{ borderRadius: "10px" }}
                  onClick={() => openModal(project.image)}
                />
                {project.images &&
                  Object.values(project.images)
                    .filter((imgSrc) => imgSrc)
                    .map((imgSrc, index) => (
                      <Image
                        key={index}
                        src={imgSrc}
                        width={300}
                        height={200}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="aspect-video overflow-hidden object-cover object-center"
                        style={{ borderRadius: "10px" }}
                        onClick={() => openModal(imgSrc)}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
        <ImageModal selectedImage={selectedImage} onClose={closeModal} />
      </section>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  )
}
