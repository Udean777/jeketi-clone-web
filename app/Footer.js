import React from "react";
import Link from "next/link";
import './globals.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 h-40">
      <ul className="flex justify-center pt-7">
        <Link href='' className="text-white mx-1 text-sm hover:border-b-2 border-white">TOP</Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-sm hover:border-b-2 border-white">News</Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-sm hover:border-b-2 border-white">Member</Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-sm hover:border-b-2 border-white">Apa Itu JKT48</Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-sm hover:border-b-2 border-white">Apa Itu AKB48</Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-sm hover:border-b-2 border-white">Pengenalan Produser</Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-sm hover:border-b-2 border-white">Kontak</Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-sm hover:border-b-2 border-white">Syarat dan Ketentuan</Link>
      </ul>
      <ul className="flex justify-center pt-5">
        <Link href='' className="text-white mx-1 text-md hover:text-lg transition ease-in"><FaFacebookSquare/></Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-md hover:text-lg transition ease-in"><FaTwitterSquare/></Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-md hover:text-lg transition ease-in"><FaInstagram/></Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-md hover:text-lg transition ease-in"><FaYoutubeSquare/></Link><span className="text-white text-sm">|</span>
        <Link href='' className="text-white mx-1 text-md hover:text-lg transition ease-in"><FaTiktok/></Link>
      </ul>
      <div className="flex justify-center text-white text-sm pt-5">
      <p>KopiKanan &copy; 2023 This Web Cloned by Udean❤️</p>
      </div>
    </footer>
  )
}
