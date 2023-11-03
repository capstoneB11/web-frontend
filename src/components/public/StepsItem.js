import React, {lazy, Suspense} from 'react'
import Spinner from '../../utils/Spinner'
const LazyImage = lazy(() => import('../../utils/LazyImage'))

const StepsItem = ({ imageItem, textTitle, textBody }) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="relative">
            <img src={imageItem} alt="Image" className="max-w-full h-auto" />
        </div>
        <div className="relative">
            <h2 className="text-xl font-bold text-black-800 mb-4 text-center">
                {textTitle}
            </h2>
            <p className="text-black-600 text-center">
                {textBody}
            </p>
        </div>
    </div>
  )
}

export default StepsItem