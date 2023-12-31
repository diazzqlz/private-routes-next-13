'use client'

import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  function handleLogin() {
    Cookie.set('auth_token', '1239k1231293129i319i2dkakdaskdoa')
    router.push('/dashboard')
  }

  return (
    <div className='flex w-full h-screen justify-center items-center flex-col gap-3'>
      <button 
        className='w-1/4 h-15 p-2 bg-green-600 rounded'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
