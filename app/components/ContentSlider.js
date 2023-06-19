import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image';
import '../globals.css'

class ContentSlider extends React.Component {
    render() {
        const settings = {
            infinite: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            autoplay: false,
            autoplaySpeed: 3000,
     
        };
      return (
        <div className='py-24 bg-rose-100'>
      <h1 className='flex justify-center text-3xl font-bold font-sans text-red-600'>RELEASE</h1>
          <Slider className='pt-10' {...settings}>
              <div>
              <div className='grid grid-cols-3 bg-white m-auto' id='release'>
                <ul className='pt-10 ms-10'>
                    <li>
                     <Image src='/release1-1.png' alt='rapsodi' width={310} height={1} className=''/>
                    </li>
                    <li className='flex justify-center text-sm'>Rapsodi</li>
                </ul>
                <ul className='pt-10 ms-10'>
                    <li className='border-x-2 border-dotted border-slate-300' id='rapsodi'>
                     <Image src='/release1-2.jpeg' alt='rapsodi' width={310} height={1} className=''/>
                    </li>
                </ul>
                <div className='pt-9 ms-5'>
                    <h1 className='text-xl w-80 pb-4' id='text-rapsodi'>Rapsodi</h1>
                    <p class="underline underline-offset-1 text-sm pt-5 font-bold">TRACK LIST</p>
                    <ul id='track-list'>
                        <li>CD</li>
                        <li>High Tension</li>
                    </ul>
                    <ul className='pt-5 text-sm w-80'>
                        <li className='pb-1'>1. Rapsodi</li>
                        <li className='pb-1'>2. Sweet & Bitter</li>
                        <li className='pb-1'>3. Menanti</li>
                        <li className='pb-1'>4. Mimpi Yang Hina - Gesu na Yume - 下衆な夢</li>
                        <li className='pb-1'>5. Siapa Yang Membuat Kita Berdua Bertemu? - Dare ga Futari wo Deawaseta no ka? - 誰が2人を出会わせたのか？</li>
                    </ul>
                    <ul className='pt-5 text-sm w-80'>
                        <li className='text-md'>DVD</li>
                        <li>1. Rapsodi Music Video</li>
                        <li>2. Sweet & Bitter Music Video</li>
                        <li>3. Rapsodi Music Video Behind The Scene</li>
                    </ul>
                </div>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-3 bg-white m-auto' id='release'>
                <ul className='pt-10 ms-10'>
                    <li>
                     <Image src='/release2-1.png' alt='High Tension' width={310} height={1} className=''/>
                    </li>
                    <li className='flex justify-center text-sm'>High Tension</li>
                </ul>
                <ul className='pt-10 ms-10'>
                    <li className='border-x-2 border-dotted border-slate-300' id='hightension'>
                     <Image src='/release2-2.jpeg' alt='High Tension' width={310} height={1} className=''/>
                    </li>
                </ul>
                <div className='pt-9 ms-5'>
                    <h1 className='text-xl w-80 pb-4' id='text-high-tension'>Rapsodi</h1>
                    <p class="underline underline-offset-1 text-sm pt-5 font-bold">TRACK LIST</p>
                    <ul id='track-list'>
                        <li>CD</li>
                        <li>Rapsodi</li>
                    </ul>
                    <ul className='pt-5 text-sm w-80'>
                        <li className='pb-1'>1. High Tension</li>
                        <li className='pb-1'>2. Musim Yang Selanjutnya - Tsugi no Season (次のSeason)</li>
                        <li className='pb-1'>3. After Rain</li>
                        <li className='pb-1'>4. Kesucian Hati Hingga Umur 19 Tahun - Junjou U-19 (純情U-19)</li>
                        <li className='pb-1'>5. Kenyataan Yang Ternoda - Kagereteiru Shinjitsu (汚れている真実)</li>
                    </ul>
                    <ul className='pt-5 text-sm w-80'>
                        <li className='text-md'>DVD</li>
                        <li>1. High Tension Music Video</li>
                        <li>2. Musim Yang Selanjutnya Music Video</li>
                        <li>3. High Tension Behind The Scene</li>
                    </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      );
    }
  }
  export default ContentSlider;
