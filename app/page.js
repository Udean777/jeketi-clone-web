'use client'
import react from 'react'
import Navbar from './Navbar.js'
import images from './components/images.js'
import ImageSlider from './components/ImageSlider'
import Image from 'next/image'
import Slider from './components/ContentSlider'
import ContentSlider from './components/ContentSlider'
import Link from 'next/link.js'
import YouTubeSlider from './components/YtSlider.js'
import AutoSlider from './components/YtSlider.js'
import Footer from './Footer.js'

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
          <Link href='/components/member' className='text-red-400 font-sans hover:text-blue-500 text-sm transition ease-in'>
            Pengumuman Mengenai Penambahan Sesi pada Video Call with JKT48, Digital Photobook “寿司の日 - Sushi Day”</Link>
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
    <div className='py-48 w-full' id='about-back'>
    <div className='flex justify-center py-5' >
        <button className='text-black font-bold py-5 bg-white' id='button1'>Apa itu theater JKT48?</button>
      </div>

      <div className='flex justify-center py-5'>
        <button className='text-black font-bold py-5 bg-white' id='button2'>Theater Virtual Tour 360°</button>
      </div>

      <div className='flex justify-center py-5'>
        <button className='text-black font-bold py-5 bg-white' id='button3'>Tata Cara Pembelian Ticket</button>
      </div>

      <div className='flex justify-center py-5'>
        <button className='text-black font-bold py-5 bg-white' id='button4'>Jadwal Event + Pembelian Ticket</button>
      </div>
    </div>

    {/* release */}
    <ContentSlider/>

    {/* Video */}
    <AutoSlider/>

    {/* goods */}
    <div className='pt-24 pb-3 bg-rose-100 w-full'>
      <h1 className='flex justify-center text-3xl font-bold font-sans text-red-600'>GOODS</h1>
      <div className='flex justify-center gap-4 pt-10'>
        <div className='w-64'>
        <Image src='/thumbnail.jpeg' width={270} height={100} className='pb-3'/>
        <Link href='' className='text-sm pt-10 hover:text-blue-500'>Pre-order Batch Kedua JKT48 Calendar 2023 “The Morning Call”</Link>
        </div>
        <div className='w-64'>
        <Image src='/thumbnail.jpeg' width={270} height={100} className='pb-3'/>
        <Link href='' className='text-sm pt-10 hover:text-blue-500'>Pengumuman Mengenai Merchandise Spesial JKT48 11th Anniversary Concert: Flying High</Link>
        </div>
        <div className='w-64'>
        <Image src='/thumbnail (1).jpeg' width={270} height={100} className='pb-3'/>
        <Link href='' className='text-sm pt-10 hover:text-blue-500'>JKT48 2023 Calendar “The Morning Call”</Link>
        </div>
        <div className='w-64'>
        <Image src='/thumbnail (2).jpeg' width={270} height={100} className='pb-3'/>
        <Link href='' className='text-sm pt-10 hover:text-blue-500'>Pengumuman Mengenai CD di Boxset “Flying High”</Link>
        </div>
      </div>
      <div className='news-btn flex justify-center py-10'>
        <button className='text-red-600 w-80 h-10 font-bold'>Check all</button>
      </div>
      </div>

      {/* special links */}
      <div className='py-24'>
      <h1 className='flex justify-center text-3xl font-bold font-sans text-red-600'>SPECIAL LINKS</h1>
      <div className='flex justify-center gap-4 py-10'>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/banner.footer.mvp.png' width={370} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/banner.footer.fanletter.jpg' width={370} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/banner.footer.handshake.png' width={370} height={100}/></Link>
      </div>
      </div>

      {/* 48 groups */}
      <div className='pb-16'>
      <h1 className='flex justify-center text-3xl font-bold font-sans text-red-600'>48 GROUP</h1>
      <div className='flex justify-center py-7'>
        <div className='grid grid-cols-4 gap-3'>
          {/* col1 */}
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/akb48.png' width={270} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/ske48.png' width={270} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/nmb48.png' width={270} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/hkt48.png' width={270} height={100}/></Link>
        {/* col2 */}
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/ngt48.png' width={270} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/stu48.png' width={270} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/bnk48.png' width={270} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/mnl48.png' width={270} height={100}/></Link>
        {/* col3 */}
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/AKBSH.png' width={270} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/AKBTP.png' width={270} height={100}/></Link>
        <Link href='' className='hover:opacity-80 transition ease-in'><Image src='/CGM48.png' width={270} height={100}/></Link>
        </div>
      </div>
      </div>

      {/* footer */}
      <Footer/>
    </main>
  )
}
 