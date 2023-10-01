import React from 'react'

const PublicBanner = ({ topSectionHeight }) => {
  return (
    <div
        style={{ height: topSectionHeight }}
        className="flex flex-col items-center justify-center bg-cover bg-center relative transition-height duration-500"
      >
        <img
          src="/welcome-image.webp"
          alt="Welcome"
          className="w-full h-full object-cover object-center"
        />
        <h1 className="text-5xl font-bold text-white absolute top-1/2 transform -translate-y-1/2">
          Welcome to Our Site
        </h1>
    </div>
  )
}

export default PublicBanner