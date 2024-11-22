
import React, { useEffect, useState } from 'react';
import videos from '../../assets/video/video.mp4'

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(mobile);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {!isMobile ? (
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-[80%] w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
          src={videos}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Hero background video"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/images/hero-fallback.jpg"
          alt="Hero fallback"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
      )}

    </section>
  );
};

export default HeroSection;
