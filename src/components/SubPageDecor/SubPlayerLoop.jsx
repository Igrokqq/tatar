import { useEffect, useRef, useState } from 'react';
import './SubPageDecor.scss';
import FramePlayer from "../FramePlayer/FramePlayer.jsx";

export default ({
                                          forwardSrc,
                                          reverseSrc,
                                          autoPlay = true,
                                          hoverPlay = false,
                                          loop = true,
                                          withLight = false,
                                          rounded = false,
                                          className = ''
                                        }) => {
  const videoRef = useRef(null);
  const [isReversed, setIsReversed] = useState(false);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  useEffect(() => {
    const handleEnded = () => {
      if (!loop) return;
      setIsReversed(prev => !prev);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, [loop]);

  useEffect(() => {
    if (autoPlay) {
      playVideo();
    }
  }, [isReversed, autoPlay]);

  return (
    <div className='SubPageDecor'>
      <div className='Digital_hero_decor_fade Digital_hero_decor_fade_r free_img'>
        <div className='Digital_hero_decor_fade_inner'></div>
      </div>
      <div className='Digital_hero_decor free_img'>
        <video
          ref={videoRef}
          src={isReversed ? reverseSrc : forwardSrc}
          playsInline
          muted
          autoPlay={autoPlay}
          className={[
            'video-player',
            withLight ? 'video-light' : '',
            rounded ? 'video-rounded' : '',
            className
          ].join(' ').trim()}
          onMouseEnter={hoverPlay ? playVideo : undefined}
          onMouseLeave={hoverPlay ? pauseVideo : undefined}
        />
      </div>
      {/*<div className='Digital_hero_decor_fade free_img'>*/}
      {/*  <div className='Digital_hero_decor_fade_inner'></div>*/}
      {/*</div>*/}
    </div>
  )
    ;
}
