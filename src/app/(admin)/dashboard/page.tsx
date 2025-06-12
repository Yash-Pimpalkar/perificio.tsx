import React from 'react'
import AdminDashboard from '@/pages/Dashboard/AdminDashboard'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
const page =async () => {
    const session = await getServerSession(authOptions)
    if(!session)  {redirect('/sign-in')}
  return (
    <div><AdminDashboard /></div>
  )
}

export default page