import React from 'react'

const sizeStyle = {
  width: "5rem",
  height: "5rem"
}

export const FullSizeLoader = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-grow" style={sizeStyle} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  )
}

export const Loader = () => {
  return (
    <>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  )
}
