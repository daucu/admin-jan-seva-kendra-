import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { API } from "./constant"
import axios from "axios"

//icons
import { GrServices } from "react-icons/gr"
import { AiOutlineClose } from 'react-icons/ai'

const Services = () => {
  const [showModal, setShowModal] = useState(false)
  const [serv_name, setServicename] = useState("")
  const [ur_name, setYourname] = useState("")
  const [description, setDescription] = useState("")
  const [Phone, setPhone] = useState("")
  const [Image_Link, setImage_Link] = useState("")

  const [service, setService] = useState('')

  const submitService = async (e) => {
    e.preventDefault()
    const data = {
      serv_name: serv_name,
      ur_name: ur_name,
      description: description,
      serv_number: Phone,
      image: Image_Link
    }
    axios.post(`${API}/service`, data)
      .then(res => {
        console.log(res)
        alert(res.data.message)
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getService = async () => {
    axios.get(`${API}/service`)
      .then(res => {
        console.log(res.data.services)
        setService(res.data.services)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getService()
  }, [])


  const updateService = async (id) => {
    const data = {
      serv_name: serv_name,
      ur_name: ur_name,
      description: description,
      serv_number: Phone,
      image: Image_Link
    }
    axios.put(`${API}/service/${id}`, data)
      .then(res => {
        console.log(res)
        alert(res.data.message)
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteService = async (id) => {
    axios.delete(`${API}/service/${id}`)
      .then(res => {
        console.log(res)
        alert(res.data.message)
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      })
  }





  return (
    <Sidebar>
      <div className='p-[20px] h-screen  overflow-y-scroll'>

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

        <div className="flex justify-around flex-wrap gap-6 mb-6  items-stretch ">
          <div className="max-w-sm 2xl:max-w-md 3xl:max-w-lg rounded overflow-hidden shadow-lg border flex flex-col justify-between">

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Nulla sit amet nisi id magna euismod hendrerit vitae ut libero
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Edit</span>
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Delete</span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span> */}
            </div>
          </div>

          <div className="max-w-sm 2xl:max-w-md 3xl:max-w-lg rounded overflow-hidden shadow-lg border flex flex-col justify-between">

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.

              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Edit</span>
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Delete</span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span> */}
            </div>
          </div>

          <div className="max-w-sm 2xl:max-w-md 3xl:max-w-lg rounded overflow-hidden shadow-lg border flex flex-col justify-between">

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Nulla sit amet nisi id magna euismod hendrerit vitae ut libero
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Edit</span>
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Delete</span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span> */}
            </div>
          </div>
        </div>
        
        <div className="flex justify-around flex-wrap gap-6 mb-6  items-stretch ">
          <div className="max-w-sm 2xl:max-w-md 3xl:max-w-lg rounded overflow-hidden shadow-lg border flex flex-col justify-between">

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Nulla sit amet nisi id magna euismod hendrerit vitae ut libero
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Edit</span>
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Delete</span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span> */}
            </div>
          </div>

          <div className="max-w-sm 2xl:max-w-md 3xl:max-w-lg rounded overflow-hidden shadow-lg border flex flex-col justify-between">

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Nulla sit amet nisi id magna euismod hendrerit vitae ut libero
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Edit</span>
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Delete</span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span> */}
            </div>
          </div>

          <div className="max-w-sm 2xl:max-w-md 3xl:max-w-lg rounded overflow-hidden shadow-lg border flex flex-col justify-between">

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa vel dignissim bibendum. Nulla sit amet nisi id magna euismod hendrerit vitae ut libero.
                Nulla sit amet nisi id magna euismod hendrerit vitae ut libero
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Edit</span>
              <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Delete</span>
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span> */}
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
                    <input type="text" placeholder='Enter service name' className='outline-none w-full p-[4px] border' onChange={(e) => setServicename(e.target.value)} />
                  </div>

                  <div className='w-[45%]'>
                    <input type="text" placeholder='Enter your name' className='outline-none w-full p-[4px] border' onChange={(e) => setYourname(e.target.value)} />
                  </div>
                </div>
                <div className='flex justify-between  p-[10px]'>
                  <div className='w-[45%]'>
                    <input type="text" placeholder='Description' className='outline-none w-full p-[4px] border'  onChange={(e) => setDescription(e.target.value)} />
                    {/* <span className='text-[12px] text-red-400'>maximum 350 character are allowed</span> */}
                  </div>

                  <div className='w-[45%]'>
                    <input type="text" placeholder='Service number' className='outline-none w-full p-[4px] border' onChange={(e) => setPhone(e.target.value)} />
                  </div>

                </div>
                <div className='flex justify-between  px-[10px]'>
                  <div className='w-[100%]'>
                    <input type="text" placeholder='Image link' className='outline-none w-full p-[4px] border' maxLength={350} onChange={(e) => setImage_Link(e.target.value)} />
                  </div>
                </div>

                <div className='flex justify-center mt-[20px]'>
                  <div>
                    <button className='bg-[#047F8B] p-[8px] z-40  text-white font-semibold' onClick={submitService}>Add services</button>
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