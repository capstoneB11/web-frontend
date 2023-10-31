import React from 'react'
import WelcomeImage from '../../assets/welcome-image.webp'

const PublicBanner = ({ topSectionHeight }) => {
  return (
    <div
        style={{ height: topSectionHeight }}
        className="flex flex-col items-center justify-center bg-cover bg-center relative transition-height duration-500"
      >
        <img
          src={WelcomeImage}
          alt="Welcome"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <h1 className="mx-16 text-center text-3xl sm:text-5xl font-bold text-white absolute">
          Welcome to Chicken Counter
        </h1>
    </div>
  )
}

export default PublicBanner