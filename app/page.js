'use client'
import react from 'react'
import Navbar from './components/Navbar'
import images from './components/images.js'
import ImageSlider from './components/ImageSlider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-hidden'>
    {/* navbar & slider */}
    <Navbar/>
    <ImageSlider images={images}/>

    {/* news */}
    <div className='news my-28'>
      <h1 className='flex justify-center text-3xl font-bold font-sans text-red-600'>NEWS</h1>
      <div className='m-auto my-14' id='news'>
      <div  className='content1'>
      <div className='flex justify-start mt-7'>
          <Image width={50} height={20} src='/icon.cat1.png' alt='theater'/><p className='ms-3 text-sm'>13 Juni 2023</p>
        </div>
        <div className='border-news'>
          <a href='' className='text-red-400 font-sans hover:text-blue-500 text-sm transition ease-in'>
            Pengumuman Mengenai Penambahan Sesi pada Video Call with JKT48, Digital Photobook “寿司の日 - Sushi Day”</a>
        </div>
      </div>
      <div  className='content2'>
      <div className='flex justify-start mt-7'>
          <Image width={50} height={20} src='/icon.cat1.png' alt='theater'/><p className='ms-3 text-sm'>11 Juni 2023</p>
        </div>
        <div className='border-news'>
          <a href='' className='text-red-400 font-sans hover:text-blue-500 text-sm transition ease-in'>
            Pengumuman Mengenai JKT48 Ponytail dan Shu-Shu MV Showcase</a>
        </div>
      </div>
      <div  className='content3'>
      <div className='flex justify-start mt-7'>
          <Image width={50} height={20} src='/icon.cat1.png' alt='theater'/><p className='ms-3 text-sm'>7 Juni 2023</p>
        </div>
        <div className='border-news'>
          <a href='' className='text-red-400 font-sans hover:text-blue-500 text-sm transition ease-in'>
            PPengumuman Mengenai Birthday 2-Shot Online Bulan Juni dengan Chekicha</a>
        </div>
      </div>
      <div  className='content4'>
      <div className='flex justify-start mt-7'>
          <Image width={50} height={20} src='/icon.cat1.png' alt='theater'/><p className='ms-3 text-sm'>6 Juni 2023</p>
        </div>
        <div className='border-news'>
          <a href='' className='text-red-400 font-sans hover:text-blue-500 text-sm transition ease-in'>
            Pengumuman Mengenai Pre-Order Digital Photobook “寿司の日 - Sushi Day” Dengan Bonus Video Call With JKT48</a>
        </div>
      </div>
      </div>
      <div className='news-btn flex justify-center'>
        <button className='text-red-600 w-80 h-10 font-bold'>Check all</button>
      </div>
    </div>

    {/* schedule */}
    <div className='mt-28 bg-rose-100'>
      <div className='m-auto' id='schedule'>
      <h1 className='flex justify-center text-3xl font-bold font-sans text-red-600 pb-5 pt-20'>SCHEDULE</h1>
      <div className='border-with-tip bg-white border-4 border-red-600 m-auto rounded-md mb-5 mt-5 p-2'>
        <p className='flex justify-center text-sm font-bold'>JKT48 THEATER/EVENT/MEDIA</p>
      </div>
    <div className='flex justify-center'>
    <div className='schedule-table'>
    <table className='table-auto'>
      <tbody>
        <tr className='flex'>
          <td className='border border-red-300 text-lg font-bold text-rose-600 bg-rose-200 text-center py-3' id='border1'>13/8 <br/> (Minggu)</td>
          <td className='border border-red-300 flex bg-white' id='border2'><Image width={56} height={1} src='/icon.cat2.png' alt='event' className= 'h-5 mt-3 ms-4 me-4'/> 
          <a href='' className='mt-3 font-sans text-red-400 hover:text-blue-500'>The Sounds Project Vol. 6</a></td>
        </tr>
        <tr className='flex'>
          <td className='border border-red-300 text-lg font-bold text-blue-600 bg-blue-100 text-center py-3' id='border1'>5/8 <br/> (Sabtu)</td>
          <td className='border border-red-300 flex bg-white' id='border2'><Image width={56} height={1} src='/icon.cat2.png' alt='event' className= 'h-5 mt-3 ms-4 me-4'/> 
          <a href='' className='mt-3 font-sans text-red-400 hover:text-blue-500'>Projek-D Vol. 2</a></td>
        </tr>
        <tr className='flex'>
          <td className='border border-red-300 text-lg font-bold text-rose-600 bg-rose-200 text-center py-3' id='border1'>16/7 <br/> (Minggu)</td>
          <td className='border border-red-300 flex bg-white' id='border2'><Image width={56} height={1} src='/icon.cat2.png' alt='event' className= 'h-5 mt-3 ms-4 me-4'/> 
          <a href='' className='mt-3 font-sans text-red-400 hover:text-blue-500'>Liburland Fest</a></td>
        </tr>
        <tr className='flex'>
          <td className='border border-red-300 text-lg font-bold bg-white text-center py-3' id='border1'>7/7 <br/> (Jumat)</td>
          <td className='border border-red-300 flex bg-white' id='border2'><Image width={56} height={1} src='/icon.cat2.png' alt='event' className= 'h-5 mt-3 ms-4 me-4'/> 
          <a href='' className='mt-3 font-sans text-red-400 hover:text-blue-500'>Jakarta Fair Kemayoran 2023</a></td>
        </tr>
        <tr className='flex'>
          <td className='border border-red-300 text-lg font-bold text-rose-600 bg-rose-200 text-center py-3' id='border1'>16/8 <br/> (Minggu)</td>
          <td className='border border-red-300 flex bg-white' id='border2'><Image width={56} height={1} src='/icon.cat2.png' alt='event' className= 'h-5 mt-3 ms-4 me-4'/> 
          <a href='' className='mt-3 font-sans text-red-400 hover:text-blue-500'>CooLAb Festival</a></td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
      </div>
      <div className='news-btn flex justify-center py-10'>
        <button className='text-red-600 w-80 h-10 font-bold'>Check all</button>
      </div>

      {/* next birthday */}
      <div className='pb-36 pt-5'>
        <div className='m-auto' id='birthday'>
      <div className='border-with-tip bg-white border-4 border-red-600 m-auto rounded-md mb-5 mt-5 p-2'>
        <p className='flex justify-center text-sm font-bold'>NEXT BIRTHDAY</p>
      </div>
        </div>

        <div className='flex justify-between m-auto' id='b-card'>
        <div class="card flex me-10 pb-4">
    <Image width={112} height={112} src="/gendis_mayrannisa.jpg" alt="Gendis" className='w-28'/>
    <div class="text text-sm w-56 ms-5">
    <a href='' className='text-rose-500 hover:text-blue-500'>
    <h3>[Trainee]</h3>
      <p>Gendis Mayrannisa</p>
      <p>23 Juni 2010</p>
    </a>
    </div>
  </div>

  <div class="card flex me-10 pb-4">
    <Image width={112} height={112} src="/gita_sekar_andarini.jpg" alt="Gita" className='profile'/>
    <div class="text text-sm w-56 ms-5">
    <a href='' className='text-rose-500 hover:text-blue-500'>
      <h3>[JKT48]</h3>
      <p>Gita Sekar Andarini</p>
      <p>30 Juni 2001</p>
        </a>
    </div>
  </div>

  <div class="card flex me-10 pb-4">
    <Image width={112} height={112} src="/mutiara_azzahra.jpg" alt="Gita" className='w-28'/>
    <div class="text text-sm w-56 ms-5">
    <a href='' className='text-rose-500 hover:text-blue-500'>
      <h3>[JKT48]</h3>
      <p>Mutiara Azzahra</p>
      <p>12 Juli 2004</p>
      </a>
    </div>
  </div>
  </div>
      </div>
    </div>

    {/* about */}
    

    </main>
  )
}
