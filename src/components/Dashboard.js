import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { API } from './constant'

//images
import loading_img from "./../assets/loading.gif"


const Dashboard = () => {
  const [loading, setLoading] = React.useState(false)
  const [isLoggedIn, setIsLoggedIn] = React.useState("")


  const get_login_user = async () => {
    await axios.get(`${API}/login/isLoggedIn`,{
     headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("token")
      }
    })
    .then((res) => {
        console.log(res)
        setIsLoggedIn(res.data)
       
    })
    .catch((err) => {
        console.log(err)
    }
    )
}
useEffect(() => {
    get_login_user()
}, [])

  //scroll to top
  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
    })
  }, [])
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (

    <>
    {isLoggedIn === false ? ( <><h1>Not Logged In</h1></>):( <Sidebar>
    
    <div className='p-[20px] h-screen overflow-y-scroll mt-[50px]'>
    {/* {loading ? <><img className='w-[100px] h-[100px] mix-blend-color-lighten' src={loading_img} alt="loading" /></> : null} */}
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
    {loading ? <><img className='w-[100px] h-[100px] mix-blend-color-lighten' src={loading_img} alt="loading" /></> : <img className="w-full" src="https://source.unsplash.com/random" alt="Random image" /> }
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

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {loading ? <><img className='w-[100px] h-[100px] mix-blend-color-lighten' src={loading_img} alt="loading" /></> : <img className="w-full" src="https://source.unsplash.com/random" alt="Random image" /> }
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

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {loading ? <><img className='w-[100px] h-[100px] mix-blend-color-lighten' src={loading_img} alt="loading" /></> : <img className="w-full" src="https://source.unsplash.com/random" alt="Random image" /> }
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
</Sidebar>)}

</>
  )
}

export default Dashboard