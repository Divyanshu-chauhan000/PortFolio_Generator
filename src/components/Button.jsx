import React from 'react'

const Button = ({text ,icon, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className='px-6 py-3 text-white font-semibold  rounded-lg bg-gradient-to-r from-indigo-600 to-blue-400  shadow-md hover:from-blue-400 hover:to-indigo-500 transition duration-300 flex items-center gap-x-2'><span>{text}</span>{icon && <span className="text-xl animate-bounce-x">{icon}</span>}
      </button>
    </div>
  )
}

export default Button