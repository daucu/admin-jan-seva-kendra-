import React, { useState } from 'react'
import Sidebar from './Sidebar'

//icons
import { GrServices } from "react-icons/gr"
import { AiOutlineClose } from 'react-icons/ai'

const Services = () => {
  const [showModal, setShowModal] = useState(false)


  return (
    <Sidebar>


      <div className='p-[20px]'>

        <div className='w-full py-[8px] px-[5px] shadow-md border flex justify-between mb-[10px]'>
          <div className='flex items-center'>
            <div className='w-[50px] '>
              <GrServices className='w-full' size={30} />
            </div>
            <div className='font-bold text-[20px]'>
              Services
            </div>

          </div>
          <div>
            <button onClick={() => setShowModal(!showModal)} className='bg-[#047F8B] p-[8px] z-40  text-white font-semibold'>Add services</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://source.unsplash.com/random" alt="Random image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
            </div>
          </div>
        </div>
      </div>

      {/* show modal */}
      {
        showModal ? (
          <>
            <div className="flex  justify-center z-50 fixed inset-0 left-[50px] right-[50px]  top-[150px]  h-[300px]  ">
              <div className='bg-[#E2E2E2] w-[500px]  flex flex-col  justify-start shadow-md'>
                <div className='flex justify-between w-full border-b-[1px] border-[#374151]'>
                  <div></div>
                  <div className='text-[20px] font-bold'>Create service</div>
                  <div className='p-[10px] h-[40px]'><AiOutlineClose size={20} onClick={() => setShowModal(false)} /></div>
                </div>
                <div className='flex justify-between mt-[20px] p-[10px]'>
                  <div className='w-[45%]'>
                    <input type="text" placeholder='Enter service name' className='outline-none w-full p-[4px] border' />
                  </div>

                  <div className='w-[45%]'>
                    <input type="text" placeholder='Enter your name' className='outline-none w-full p-[4px] border' />
                  </div>
                </div>
                <div className='flex justify-between  p-[10px]'>
                  <div className='w-[45%]'>
                    <input type="text" placeholder='Description' className='outline-none w-full p-[4px] border' maxLength={350} />
                    <span className='text-[12px] text-red-400'>maximum 350 character are allowed</span>
                  </div>
                  
                  <div className='w-[45%]'>
                    <input type="text" placeholder='Service number' className='outline-none w-full p-[4px] border' />
                  </div>

                </div>
                <div className='flex justify-between  px-[10px]'>
                  <div className='w-[100%]'>
                    <input type="text" placeholder='Image link' className='outline-none w-full p-[4px] border' maxLength={350} />
                  </div>
                </div>

                <div className='flex justify-center mt-[20px]'>
                  <div>
                    <button  className='bg-[#047F8B] p-[8px] z-40  text-white font-semibold'>Add services</button>
                  </div>
                </div>

              </div>
            </div>
          </>
        ) :
          null
      }
    </Sidebar>
  )
}

export default Services