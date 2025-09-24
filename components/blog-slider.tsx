'use client'

import { blogs } from "../app/data/blogs"
import { motion } from "framer-motion"
import Link from "next/link"

export function BlogSlider() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Latest Blogs
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }} // adjust based on number of blogs
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="min-w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-foreground dark:text-white">{blog.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
