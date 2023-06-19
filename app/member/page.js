import React from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
import {FaInstagram} from 'react-icons/fa'

export default function Member() {
  return (
    <>
    <Navbar/>
    <h1>Member Page</h1>
    <Link href='/'>Balik woy <FaInstagram/></Link>
    </>
  )
}
