import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { API } from './constant'

//icons
import {AiOutlineUserSwitch} from 'react-icons/ai'
import User_table_list from './User_table_list'

const Login_user_list = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState("")


    const get_login_user = async () => {
      await axios.get(`${API}/login/isLoggedIn`,{
       headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("token")
        }
      })
      .then((res) => {
          console.log(res.data)
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
  return (
    <div>
        {isLoggedIn === false ? window.location.href = "/" : (
             <Sidebar>
        <div className='p-[20px] h-screen  overflow-y-scroll mt-[50px] md:mt-0'>
        <div className='w-full py-[8px] px-[5px] shadow-md border flex justify-between mb-[10px]'>
          <div className='flex items-center'>
            <div className='w-[50px] '>
              <AiOutlineUserSwitch className='w-full' size={30} />
            </div>
            <div className='font-bold text-[20px]'>
              Active Users
            </div>

          </div> 
          <div className='invisible'>
           hidden div
          </div>
        </div>

        <User_table_list/>
        </div>
        
       </Sidebar>
        )}
      
    </div>
  )
}

export default Login_user_list