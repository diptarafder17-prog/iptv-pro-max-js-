import React from 'react';
import { useChannels } from '../hooks/useChannels';
import ChannelCard from '../components/ChannelCard';
import VideoPlayer from '../components/VideoPlayer';
import { useStore } from '../store/useStore';

export default function Home() {
  const { channels, loading } = useChannels();
  const current = useStore((s) => s.current);
  const setCurrent = useStore((s) => s.setCurrent);

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <img src="/icons/icon-192.png" alt="logo" className="logo" />
          <h1>IPTV Pro</h1>
        </div>
      </header>

      <main className="main">
        <section className="player">
          {current ? (
            <VideoPlayer src={current.streamUrl} poster={current.logo} />
          ) : (
            <div className="placeholder">Select a channel to start watching</div>
          )}
        </section>

        <aside className="sidebar">
          <h2>Channels</h2>
          {loading && <div>Loading channels…</div>}
          <div className="list">
            {channels.map((ch) => (
              <ChannelCard key={ch.id} channel={ch} onSelect={setCurrent} />
            ))}
          </div>
        </aside>
      </main>

      <style jsx>{`
        .page { padding:18px; color:#e6eef8; background:linear-gradient(180deg,#07101a,#041018); min-height:100vh; }
        .topbar { display:flex; align-items:center; gap:12px; margin-bottom:18px; }
        .brand { display:flex; align-items:center; gap:12px; }
        .logo { width:48px; height:48px; border-radius:8px; }
        .main { display:flex; gap:18px; flex-direction:column; }
        @media(min-width:900px) { .main { flex-direction:row; } .player { flex:2 } .sidebar { flex:1; max-width:360px } }
        .player { background:rgba(255,255,255,0.02); padding:12px; border-radius:12px; }
        .placeholder { padding:40px; text-align:center; color:#9fb3c8; }
        .sidebar h2 { margin:0 0 12px 0; }
        .list { display:flex; flex-direction:column; gap:10px; }
      `}</style>
    </div>
  );
}
