import { useEffect, useRef, useState } from "react";

export default function({ src, poster, play, className }) {
  const videoRef = useRef(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (play && !ended && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.warn);
    }
  }, [play, ended]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => setEnded(true);
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  console.log(play, 'play');

  return (
    <div className={`map-video-wrapper ${className}`}>
      {!ended ? (
        <video
          ref={videoRef}
          src={src}
          muted
          autoPlay
          playsInline
          className="map-video-bg"
        />
      ) : (
        <img
          src={poster}
          alt="Video end picture"
          className="map-video-bg"
        />
      )}
    </div>
  );
}
