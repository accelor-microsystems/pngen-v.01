"use client"
import axios from "axios"
import { useState } from "react"
import Router from "next/router"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Login({ setLoggedIn }) {
    const router = useRouter();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    const handleSignIn = async () => {
        const res = await axios.post('/api/userExist/', { username, password })
        if (res) {
            if (res.status === 200) {
                setLoggedIn(true)
            }
        }
    }

    return (
        <div className="flex max-sm:flex-col h-[100vh]">

            <div className="flex   bg-gray-700 flex-col p-6 items-center justify-center w-full flex-1 max-sm:flex-[0.3] h-full">
                <Image className="max-sm:w-[150px]" src="/accelor-nobg11.png" alt="logo" width={200} height={200} />
                <h2 className="text-[4rem] text-white mb-4 max-sm:text-[2.2rem]  stroked-text">PNGEN - V.01</h2>
            </div>
            <div className="flex flex-[2] items-center justify-center flex-col h-full gap-2 bg-gray-100">
                <h1 className="text-[2.4rem] max-sm:text-[1.8rem] font-bold my-5">
                    Log in to proceed
                </h1>
                <div className="flex flex-col w-[40%] max-sm:w-full px-4 gap-2">

                    <input className="border p-2 outline-none " value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" />
                    <input className="border p-2 outline-none " value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" />
                    <button className="bg-green-700 px-5 mt-3  py-2 text-white hover:bg-green-600" onClick={handleSignIn}>Sign in</button>
                </div>
            </div>
        </div>
    )
}