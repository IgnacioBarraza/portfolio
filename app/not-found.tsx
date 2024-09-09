// src/app/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"

export default function Page404() {
  return (
    <main className="flex-1">
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <Image
              src="/dio-brando-dio.gif"
              alt="Confused page gif"
              className="rounded-full"
              width={200}
              height={200}
              unoptimized
              style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
          </div>
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-muted-foreground text-xl">
            Oops, the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href={'/'}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
