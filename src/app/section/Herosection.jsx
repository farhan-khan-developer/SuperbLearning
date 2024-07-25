/* eslint-disable jsx-a11y/alt-text */
import superblearningimg from '../../../public/superblearningimg.png'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div className="flex justify-center items-center text-center text-[#160141] flex-col gap-5">
        <div className='flex flex-col'>
            <div className='flex justify-center items-end'>
                <h1 className='text-7xl'>Unlock</h1>
                <Image
                src={superblearningimg}
                width={100}
                height={100}
                />
                <h1 className='text-7xl'>the Future of </h1>
            </div>
            <p className='text-7xl'>Education with Our <br /> Comprehensive Training <br /> Programs!</p>
        </div>
        <div>
            <h1 className='text-gray-400 text-2xl'>Ready to Empower Your Teaching Journey?</h1>
        </div>
    </div>
  )
}

export default Herosection
