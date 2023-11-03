import React, { lazy, Suspense } from 'react'
import WelcomeImage from '../../assets/welcome-image.webp'
import Spinner from '../../utils/Spinner';
const LazyImage = lazy(() => import('../../utils/LazyImage'));

const PublicBanner = ({ topSectionHeight }) => {
  return (
    <div
        style={{ height: topSectionHeight }}
        className="flex flex-col items-center justify-center bg-cover bg-center relative transition-height duration-500"
      >
        <Suspense fallback={<Spinner/>}>
          <LazyImage
            src={WelcomeImage}
            alt="Welcome"
            className="w-full h-full object-cover object-center"
          />
        </Suspense>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <h1 className="mx-16 text-center text-3xl sm:text-5xl font-bold text-white absolute">
          Welcome to Chicken Counter
        </h1>
    </div>
  )
}

export default PublicBanner