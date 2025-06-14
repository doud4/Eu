import React from "react";
import "./MusicCard.css";

export default function MusicCard() {
  return (
    <div className="music-card">
      {/* Player do Spotify */}
      <iframe
        src="https://open.spotify.com/embed/track/5FbcIkgUDNt6mZdDVFwVyE?si=8b8a47d7585c4efe"
        width="80"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Ter o coração no chão - ANAVITÓRIA"
        style={{ borderRadius: "10px", minWidth: "80px", marginRight: "16px" }}
      ></iframe>
      {/* Informações da música */}
      <div className="music-card__info">
        <div className="music-card__title">Ter o coração no chão</div>
        <div className="music-card__artist">ANAVITÓRIA</div>
      </div>
    </div>
  );
}