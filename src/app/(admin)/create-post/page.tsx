import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import CreatePosts from '@/components/Blogs/CreatePosts'

const page = async () => {
  const session = await getServerSession(authOptions)
  if(!session)  {redirect('/sign-in')}
  console.log(session)
  return (
    <div><CreatePosts/></div>
  )
}


export default page