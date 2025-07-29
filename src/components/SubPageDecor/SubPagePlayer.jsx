import './SubPageDecor.scss';

export default function SubPageVideo({ src , className = '' }) {

  return (
    <video
      className={`subpage-video-bg ${className}`}
      src={src}
      muted
      playsInline
      autoPlay
      loop
    />
  );
}
