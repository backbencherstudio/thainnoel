import React, { Suspense } from 'react'
import BlogDetails from './components/blogdetails'

export default function BlogDetailsPage() {
  return (
    <div className="w-full">
      <Suspense fallback={<div className="w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center px-4">
          <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600">Loading blog details...</p>
        </div>
      </div>}>
        <BlogDetails />
      </Suspense>
    </div>
  )
}
