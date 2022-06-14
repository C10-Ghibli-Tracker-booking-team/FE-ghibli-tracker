import React from 'react'

const App = () => {
  return (
    <div className="bg-gray-500 flex flex-col w-auto">
      
      <header>
          <h1 className="font-bold text-white mt-8 text-4xl text-center">Studio Ghibli Tracker</h1>
      </header>

        <div className="bg-gray-500 items-center flex flex-col text-center p-16 block bg-gray-800">
          <label className="text-white text-xl">User</label>
          <input className="w-80 px-4 border-black rounded-full" type="text" placeholder="Username"/>
          <label className="align-center aling-center mt-6 text-white text-xl">Password</label>
          <input className="w-80 px-4 rounded-full" type="password" placeholder="Password"/>
          <button className="border-2 border-gray-600 w-32 rounded-full m-5 bg-green-700">Login</button>
        </div>

        <div className="w-auto m-4 items-center flex flex-col text-center p-4 block bg-gray-500">
            <button className="bg-gray-700 rounded-full w-80 m-4 text-xl text-white">Connect with Twitter</button>
            <button className="bg-gray-700 rounded-full w-80 text-xl text-white">Connect with Facebook</button>
        </div>

    </div>

    
  )
}

export default App