import YouTube from "react-youtube";
import '../globals.css'
import Link from "next/link";

const YouTubeSlider = () => {
  // YouTube video options
  const opts = {
    height: '240',
    width: '440',
    playerVars: {
    },
  };

  const videoIds = [
    { id: 'pHxJMHCNArU', link: 'https://youtu.be/pHxJMHCNArU' },
    { id: 'AsHS332Onl8', link: 'https://youtu.be/AsHS332Onl8' },
    { id: '2wvqBMjPmqk', link: 'https://youtu.be/2wvqBMjPmqk' },
    { id: 'HPy3ClS9Zw0', link: 'https://youtu.be/HPy3ClS9Zw0' },
    { id: '_ZKRruCnmI0', link: 'https://youtu.be/_ZKRruCnmI0' },
    { id: 'g2QSP2xxmkg', link: 'https://youtu.be/g2QSP2xxmkg' },
  ];
  

  return (
    <main className="pt-20">
      <h1 className='flex justify-center text-3xl font-bold font-sans text-red-600'>RELEASE</h1>
    <div className="justify-center gap-4 py-20 grid grid-cols-3 grid-rows-2">
      {videoIds.map((video) => (
        <Link href={video.link} key={video.id}>
          <YouTube videoId={video.id} opts={opts} />
        </Link>
      ))}
    </div>
    </main>
  );
  
};

export default YouTubeSlider;
