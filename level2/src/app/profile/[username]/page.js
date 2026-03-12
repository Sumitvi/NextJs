import React from 'react'

const page = async ({ params }) => {
  const { username } = await params

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Username is : {username}
      </h1>
    </div>
  )
}

export default page