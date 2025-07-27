// SubPageVideo.jsx
import { useEffect, useRef, useState } from 'react';
import './SubPageDecor.scss';

export default function SubPageVideo({ forwardSrc, reverseSrc, className = '' }) {
  const videoRef = useRef(null);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const handleEnded = () => {
      setIsReversed(prev => !prev);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleEnded);
      video.play();
    }

    return () => {
      video?.removeEventListener('ended', handleEnded);
    };
  }, [isReversed]);

  useEffect(() => {
    videoRef.current?.play();
  }, [isReversed]);

  return (
    <video
      className={`subpage-video-bg ${className}`}
      ref={videoRef}
      src={isReversed ? reverseSrc : forwardSrc}
      muted
      playsInline
      autoPlay
    />
  );
}
