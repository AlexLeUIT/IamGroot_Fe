import React from 'react'
import { LoaderCircle } from 'lucide-react'

const Loading = () => {
  return (
    <div className='bg-yellow-light flex items-center w-full h-screen justify-center gap-2'>
        <LoaderCircle className='animate-spin'/>
        <span>Loading...</span>
    </div>
  )
}

export default Loading