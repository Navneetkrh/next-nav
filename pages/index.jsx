import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/navbar'

export default function Home() {
  return (
    <div className='bg-[#F4F5D7]'>
      <Head>
        <title>Nav ki site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Put navbar with desired color name */}
      <Navbar navColor="bg-[#98D0FF]" textColor="mr-4 font-medium text-teal-900 hover:text-black" />
    
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url('https://cdn.dribbble.com/userupload/3271720/file/original-176c25fd991eb0e6ea23875d304d56d1.jpg')] bg-auto bg-cover bg-no-repeat">
        <h1 className="text-6xl font-bold text-center text-[#A85924]">
          Welcome to <a href="https://nextjs.org">Jungle!!</a>
        </h1>
      </div>
     
      {/* <Image src="https://cdn.dribbble.com/userupload/3957856/file/original-0d0eb97303ab256767294d25d34fbb3f.png?compress=1&resize=752x" alt="busstop" width={128} height={128} /> */}
      
    </div>
  )
}
