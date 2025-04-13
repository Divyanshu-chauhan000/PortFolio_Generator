import React from 'react'

const Button = ({text ,icon, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className='px-6 py-3 text-gray-900 font-semibold  rounded-lg bg-gradient-to-r from-purple-400 to-peach  shadow-md hover:from-peach hover:to-purple-300 transition duration-300 flex items-center gap-x-2'><span>{text}</span>{icon && <span className="text-xl animate-bounce-x">{icon}</span>}
      </button>
    </div>
  )
}

export default Button