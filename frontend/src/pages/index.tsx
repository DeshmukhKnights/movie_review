import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { useFetchUser } from '@/lib/authContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, loading } = useFetchUser()
  return (
    <Layout user={user}>
      <h1 className='font-bold text-5xl text-black'>Hello</h1>
    </Layout>
  )
}
