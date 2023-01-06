import React from 'react'

const Card = () => {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-[#213350]">Employee Access</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <div className="px-6 py-4">
      <button className="btn bg-[#213350] text-white font-bold py-2 px-4 rounded-full w-full">Employee Login</button>
    </div>
  </div>
  )
}

export default Card