import React, { Suspense } from 'react'
import BlogDetails from './components/blogdetails'

export default function BlogDetailsPage() {
  return (
    <div className="w-full">
      <Suspense fallback={<div className="w-full flex items-center justify-center py-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog details...</p>
        </div>
      </div>}>
        <BlogDetails />
      </Suspense>
    </div>
  )
}
