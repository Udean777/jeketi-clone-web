import react from "react";
import '../globals.css'
import Image from 'next/image'

export default function Navbar(){
    return(
        <>
        <div className="flex justify-between">
            <div className="flex">
        <a href="#home" className="pointer-events-none"><Image src="/logo.svg" width={64} height={64} alt="jeketi" className="w-16 ms-28 pointer-events-auto"/></a>
        <p className="mt-7 text-lg ms-2 font-bold text-red-600">JKT48 <br/> Official Website</p>
            </div>
        <div className="flex me-28 justify-center my-4">
            <div>
            <a href="" className="text-red-600 text-sm me-1 h-6 hover:text-blue-500 transition ease-in">Login</a> <span className="text-sm"> / </span>
            <a href="" className="text-red-600 text-sm ms-1 h-6 hover:text-blue-500 transition ease-in">Register</a>
            </div>
            <div className="flex mb-auto ms-3">
            <Image width={28} height={28} src="/flag-indonesia.svg" alt="Indonesia" className="w-7" />
            <Image width={28} height={28} src="/flag-japan.svg" alt="Jepang" className="w-7 ms-3"/>
            </div>
        </div>
        </div>
        <div className="flex justify-center bg-red-600 py-0 mt-4">
            <ul className="flex" id="navbar">
                <li className="text-center w-40 py-5 text-sm text-white font-sans hover:bg-red-700 transition ease-in"><a href="">NEWS</a></li>
                <li className="text-center w-40 py-5 text-sm text-white font-sans hover:bg-red-700 transition ease-in"><a href="">SCHEDULE</a></li>
                <li className="text-center w-40 py-5 text-sm text-white font-sans hover:bg-red-700 transition ease-in"><a href="">MEMBER</a></li>
                <div className="dropdown">
                    <button className="dropbtn text-white w-40 font-sans rounded inline-flex items-center hover:bg-red-700">
                    <div className="flex justify-center m-auto">
                    <p className="text-white font-sans text-sm hover:bg-red-700">THEATER</p>
                    <svg className="fill-current h-6 w-6 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="" className="text-sm">Apa Itu Teater JKT48</a>
                    <a href="" className="text-sm">Theater Virtual Tour 360°</a>
                    <a href="" className="text-sm">Tata Cara Pembelian Ticket</a>
                    <a href="" className="text-sm">Jadwal Pertunjukan + Pembelian Ticket</a>
                    <a href="" className="text-sm">Jadwal Event + Pembelian Ticket</a>
                </div>
                </div>
                <div className="dropdown">
                <button className="dropbtn text-white w-40 font-sans rounded inline-flex items-center hover:bg-red-700">
                    <div className="flex justify-center m-auto">
                    <p className="text-white font-sans text-sm hover:bg-red-700">JKT48 POINTS</p>
                    <svg className="fill-current h-6 w-6 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="" className="text-sm">Cara Beli dan Pakai JKT48 Points</a>
                    <a href="" className="text-sm">Beli JKT48 Points</a>
                </div>
                </div>
                <div className="dropdown">
                <button className="dropbtn text-white w-40 font-sans rounded inline-flex items-center hover:bg-red-700">
                    <div className="flex justify-center m-auto">
                    <p className="text-white font-sans text-sm hover:bg-red-700">SHOP</p>
                    <svg className="fill-current h-6 w-6 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="" className="text-sm">JKT48 Web Shop</a>
                    <a href="" className="text-sm">JKT48 Shop at Tokopedia</a>
                </div>
                </div>
                <li className="text-center w-40 py-5 text-sm text-white font-sans hover:bg-red-700 transition ease-in"><a href="">FANCLUB</a></li>
            </ul>
        </div>
        </>
    )
}