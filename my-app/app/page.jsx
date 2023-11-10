import Presentation from './component/presentation'
import Generator from './component/generator'

import Image from 'next/image'

export default function Page() {
  return <div className='w-screen  bg-white'>
      <div className='flex flex-col m-9 items-center '>
        <Presentation  />
        <Generator />
      </div>
      

  </div>
}