import React, { useEffect, useState } from 'react'
import { HiMenuAlt3, HiOutlineUsers } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsChatLeft, BsPersonGear } from 'react-icons/bs'
import LOGO from '../assets/profile.png'
import ICON from '../assets/icon.png'
import  Divider  from './Divider'
import { Switch } from 'antd'

const Sidenav = () => {
    const [open, setOpen] = useState(true)
    
  return (
    <div className={`min-h-screen ${open ? 'w-64' : 'w-16'} bg-white dark:bg-dark-primary p-3`}>
        <div className="py-3 flex justify-center items-center">
            <div className='flex flex-col items-center'>
                <img src={ICON} alt="logo" className={`${open ? 'w-[15%]' : 'w-[60%]'}`} />
                <img src={LOGO} alt="logo" className={`w-[70%] ${!open && 'hidden' } `}/>
            </div>
        </div>
        <Divider />
        <div className='py-1 flex justify-end'>
            <HiMenuAlt3 
                size={28} 
                className="cursor-pointer text-dark-primary dark:text-light-primary"
                onClick={() => setOpen(!open)}
            />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
            <Link to={'/'} className='flex items-center text-sm gap-3 font-medium p-2 hover:bg-gray-100/70 dark:hover:bg-gray-700 rounded-md group'>
                <div><RxDashboard size={20} /></div>
                <h2 
                    className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                    style={{ 
                        transitionDelay: `300ms`
                    }}
                >Dashboard</h2>
                <h2 
                    className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre  dark:text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                Dashboard
                </h2>
            </Link>
            <Link to={'/'} className='flex items-center text-sm gap-3 font-medium p-2 hover:bg-gray-100/70 dark:hover:bg-gray-700 rounded-md group'>
                <div><AiOutlineShoppingCart size={20} /></div>
                <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                style={{ 
                    transitionDelay: `400ms`
                }}>Products</h2>
                <h2 
                    className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre  dark:text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                Products
                </h2>
            </Link>
            <Link to={'/'} className='flex items-center text-sm gap-3 font-medium p-2 hover:bg-gray-100/70 dark:hover:bg-gray-700 rounded-md group'>
            <div><AiOutlineUser size={20} /></div>
                <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                style={{ 
                        transitionDelay: `500ms`
                }}>My Suppliers</h2>
                <h2 
                    className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre  dark:text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                My Suppliers
                </h2>
            </Link>
            <Link to={'/'} className='flex items-center text-sm gap-3 font-medium p-2 hover:bg-gray-100/70 dark:hover:bg-gray-700 rounded-md group'>
                <div><HiOutlineUsers size={20} /></div>
                <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                style={{ 
                        transitionDelay: `600ms`
                }}>Users</h2>
                <h2 
                    className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre  dark:text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                Users
                </h2>
            </Link>
            <Link to={'/'} className='flex items-center text-sm gap-3 font-medium p-2 hover:bg-gray-100/70 dark:hover:bg-gray-700 rounded-md group'>
                <div><BsPersonGear size={20} /></div>
                <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                style={{ 
                        transitionDelay: `700ms`
                }}>My Account</h2>
                <h2 
                    className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre  dark:text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                My Account
                </h2>
            </Link>
            <Link to={'/'} className='flex items-center text-sm gap-3 font-medium p-2 hover:bg-gray-100/70 dark:hover:bg-gray-700  rounded-md group'>
                <div><BsChatLeft size={20} /></div>
                <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                style={{ 
                        transitionDelay: `800ms`
                    }}>Report Bug</h2>
                <h2 
                    className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre  dark:text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                Report Bug
                </h2>
            </Link>
        </div>

    </div>
  )
}

export default Sidenav
