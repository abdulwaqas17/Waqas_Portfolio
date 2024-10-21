import React from 'react'
import '../index.css'

const Home = () => {
  return (
    <div>
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="text-center">
        <h1 className="text-5xl text-white font-bold">Hello, I'm YourName</h1>
        <p className="mt-4 text-lg text-gray-200">Web Developer | Designer | Creator</p>
        <a className="mt-8 inline-block px-6 py-3 bg-white text-indigo-500 rounded-lg font-bold">View My Work</a>
      </div>
    </section>
    </div>
  )
}

export default Home
