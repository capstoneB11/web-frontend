import React from 'react'
import Lottie from 'react-lottie'

const Loader = ({loaderOptions}) => {
  return (
    <div className="loading-container items-center justify-center">
        <Lottie options={loaderOptions} height={200} width={200} />
    </div>
  )
}

export default Loader