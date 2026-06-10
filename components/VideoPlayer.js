import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.play().catch(() => {});
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({ lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => {
        hls.destroy();
      };
    } else {
      video.src = src;
      video.play().catch(() => {});
    }
  }, [src]);

  return (
    <div className="player-wrap">
      <video
        ref={videoRef}
        controls
        playsInline
        poster={poster}
        style={{ width: '100%', borderRadius: 12, background: '#000' }}
      />
      <style jsx>{`
        .player-wrap { width:100%; max-width:100%; }
      `}</style>
    </div>
  );
}
