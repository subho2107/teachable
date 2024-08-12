'use client';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {useState } from 'react';
import Image from 'next/image';
const VideoComponent = ({src}: {src: string}) => {
    const [playVideo, setPlayVideo] = useState<boolean>(false);

    return (<div className='lg:w-[70rem] w-80 flex justify-center'>
        {
        playVideo ? 
        <div className='relative pb-[55%] w-full h-full'>
            <iframe 
                className='absolute top-0 left-0 w-full h-full'
                src={src} 
                allow='autoplay' 
                title="YouTube video player" 
                frameBorder="0" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            />
        </div>
        : <div onClick={() => setPlayVideo(true)} className='relative'>
            <Image src='/poster.jpg' width={933} height={525} alt='what is teachable machine' className='rounded-lg'/>
            <div className='bg-blue-500 hover:bg-blue-600 absolute z-10 w-20 h-20 rounded-full text-white justify-center items-center flex md:top-1/2 md:left-1/2 top-1/3 left-[40%]'>
                <PlayArrowIcon style={{fontSize: '4rem'}}/>
            </div>
        </div>
    }
    </div>);
}

export default VideoComponent;