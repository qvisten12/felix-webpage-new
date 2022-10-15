import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import Head from 'next/head'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState(false)
  const [completed, setCompleted] = useState<boolean>(false)
  const form = useRef<HTMLFormElement>(null)

  const sendFeedback = (e: any) => {
    e.preventDefault()

    // powered by emailJS
    if (name.length > 0 && email.length > 0 && feedback.length > 0) {
      emailjs.sendForm('service_nn00neg', 'template_hljnkab', form.current!, 'user_qGfj46Ua3xq4eNrej2j5I').then(
        () => {
          setName('')
          setEmail('')
          setFeedback('')
          setError(false)
          setCompleted(true)
          setTimeout(() => {
            setCompleted(false)
          }, 4000)
        },
        (error) => {
          setCompleted(false)
          setError(true)
          console.log(error)
        }
      )
    } else {
      setError(true)
    }
  }

  return (
    <div className="block text-center">
      <Head>
        <title>Contact Felix</title>
      </Head>
      <h1 className="font-medium md:font-semibold text-4xl md:text-8xl ">Contact Me</h1>
      <p className="text-center text-gray-600 text-lg mt-5 font-medium m-1 my-2">Found a bug, a tip, or maybe you just want to say hi?</p>
      <div className="mt-20">
        <form ref={form} onSubmit={sendFeedback}>
          {completed ? (
            <p className="text-gray-700 font-bold text-lg">
              Thank you for your feedback! <span className="inline-block"> 🙂</span>
            </p>
          ) : (
            <>
              <div className="my-2">
                <input className="py-2 border-2 rounded-md w-full px-1" placeholder="Name" value={name} name="user_name" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="my-2">
                <input className="py-2 border-2 rounded-md w-full px-1" placeholder="Email" type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="my-2">
                <textarea className="py-2 border-2 rounded-md resize-none px-1 w-full" placeholder="Feedback" name="message" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
              </div>
              <p className="text-red-500 my-2" style={{ display: error ? 'block' : 'none' }}>
                Please make sure all field are filled!
              </p>
              <button
                className="border-blue-500 border-2 p-2 my-2
                    rounded-md text-blue-500 text-md font-bold
                    hover:bg-blue-500 hover:text-white"
                type="submit"
                value="Send"
              >
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
