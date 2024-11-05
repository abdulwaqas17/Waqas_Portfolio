import React from 'react'
import '../index.css'
// import Counter from '../Components/Counter'

const Contact = () => {
  
  return (
    <div className='mt-16'>
      <section id="contact" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-5">Contact Me</h2>
        <form className="max-w-xl mx-auto">
          <input type="text" className="block w-full p-3 mb-4 rounded-lg border border-gray-300" placeholder="Your Name" />
          <input type="email" className="block w-full p-3 mb-4 rounded-lg border border-gray-300" placeholder="Your Email" />
          <textarea className="block w-full p-3 mb-4 rounded-lg border border-gray-300" placeholder="Your Message" rows="4"></textarea>
          <button className="w-full bg-indigo-500 text-white py-3 rounded-lg font-bold">Send Message</button>
        </form>
      </section>
      {/* <Counter/>       */}
    </div>
  )
}

export default Contact
