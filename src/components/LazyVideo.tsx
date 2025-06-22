import { useRef, useEffect, useState } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
}

const LazyVideo = ({ src, className }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Pre-load videos when they are 100px away from the viewport
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videore.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={isIntersecting ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      tabIndex={0}
    />
  );
};

export default LazyVideo; 