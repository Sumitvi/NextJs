'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter()
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </ul>

      <button onClick={()=> router.push("/about")}>
        Go to About
      </button>
      
    </div>
  )
}

export default page
