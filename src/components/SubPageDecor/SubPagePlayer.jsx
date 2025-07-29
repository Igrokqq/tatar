import { forwardRef, useRef, useEffect, useState } from 'react';
import './SubPageDecor.scss';

const SubPagePlayer = forwardRef(function SubPagePlayer(
  { src, className = '', mode = 'loop', endImage = null },
  refFromParent
) {
  const localRef = useRef(null);
  const videoRef = refFromParent || localRef;
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || mode === 'loop') return;

    const handleEnded = () => {
      if (mode === 'end-stop') {
        video.pause();
        video.currentTime = video.duration;
      } else if (mode === 'end-image') {
        setEnded(true);
      }
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [mode]);

  if (mode === 'end-image' && ended && endImage) {
    return <img src={endImage} className={`subpage-video-bg ${className}`} alt="Poster" />;
  }

  return (
    <video
      className={`subpage-video-bg ${className}`}
      ref={videoRef}
      src={src}
      muted
      playsInline
      autoPlay
      loop={mode === 'loop'}
    />
  );
});

export default SubPagePlayer;