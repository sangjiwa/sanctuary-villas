"use client";

import { useEffect, useRef, useState } from "react";

interface BackgroundVideoProps {
  desktopSrc: string;
  mobileSrc: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export default function BackgroundVideo({
  desktopSrc,
  mobileSrc,
  poster,
  className = "",
  overlay = true,
  overlayOpacity = 0.4,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Start playing video when loaded
    if (videoRef.current && isLoaded) {
      videoRef.current.play().catch(() => {
        // Autoplay prevented by browser, video will start when user interacts
      });
    }
  }, [isLoaded]);

  const videoSrc = isMobile ? mobileSrc : desktopSrc;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
