
'use client'
import { blogs } from "../app/data/blogs"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function BlogSlider() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % blogs.length)
    }, 4000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  const prev = () => setCurrent((prev) => (prev - 1 + blogs.length) % blogs.length)
  const next = () => setCurrent((prev) => (prev + 1) % blogs.length)

  return (
  <section className="py-20 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Latest Blogs
        </h2>
  <div className="relative max-w-4xl mx-auto min-h-[320px]">
          {blogs.map((blog, idx) => (
            <div
              key={blog.id}
              className={`flex flex-col md:flex-row items-stretch bg-white dark:bg-gray-800 rounded-2xl shadow-md transition-all duration-300 overflow-hidden absolute w-full top-0 left-0 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'} h-full`}
            >
              {/* Left: Image */}
              <div className="md:w-1/2 w-full h-64 md:h-auto flex-shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right: Content */}
              <div className="flex-1 flex flex-col justify-center p-8">
                <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground dark:text-white">{blog.title}</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4 line-clamp-4">{blog.excerpt}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-blue-500 font-medium hover:underline mb-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
          {/* Navigation Buttons */}
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 rounded-full p-2 shadow hover:bg-white dark:hover:bg-gray-700 z-20">
            &#8592;
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 rounded-full p-2 shadow hover:bg-white dark:hover:bg-gray-700 z-20">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}
