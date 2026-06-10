import React from 'react';

export default function ChannelCard({ channel, onSelect }) {
  return (
    <button
      className="channel-card"
      onClick={() => onSelect(channel)}
      aria-label={`Open ${channel.name}`}
    >
      <img src={channel.logo} alt={`${channel.name} logo`} className="channel-logo" />
      <div className="channel-meta">
        <div className="channel-name">{channel.name}</div>
      </div>

      <style jsx>{`
        .channel-card {
          display:flex;
          align-items:center;
          gap:12px;
          padding:10px;
          border-radius:10px;
          background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border:1px solid rgba(255,255,255,0.03);
          cursor:pointer;
          width:100%;
          text-align:left;
        }
        .channel-card:focus { outline: 3px solid rgba(0,195,255,0.18); }
        .channel-logo { width:56px; height:56px; border-radius:8px; object-fit:cover; }
        .channel-name { font-weight:600; color: #e6eef8; }
      `}</style>
    </button>
  );
}
