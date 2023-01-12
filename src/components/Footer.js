import React from 'react'
import { useContext } from 'react'
import { BsGithub } from 'react-icons/bs'
import ThemeContext from '../Context/ThemeContext'

const Footer = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <footer className={`${theme === "dark" ? "bg-slate-800" : "bg-black"} p-2.5 flex justify-center items-center`}>
            <BsGithub className='mx-2' />
            <p>Github Profile Finder | @ piyush Yadav</p>
        </footer>
    )
}

export default Footer