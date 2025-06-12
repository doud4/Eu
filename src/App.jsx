import React, { useState, useEffect } from 'react';

function App() {
  const [started, setStarted] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/photos/photos.json')
      .then(res => res.json())
      .then(setPhotos);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  const fundo = 'linear-gradient(135deg, #4b3f20 0%, #96b38a 100%)';

  return (
    <div style={{
      minHeight: '100vh',
      background: fundo,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: '"Verdana", "Tahoma", "Geneva", sans-serif',
    }}>
      <div style={{
        marginTop: 40,
        marginBottom: 24,
        borderRadius: 32,
        border: '6px solid #d7c9b6',
        background: '#fffefc',
        boxShadow: '0 10px 30px #2c24105a',
        maxWidth: 370,
        width: '90vw',
        minHeight: 720,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: 0,
      }}>
        {/* Topo iPhone retrô */}
        <div style={{
          width: '100%',
          background: '#796648',
          color: '#f9eccf',
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          fontWeight: 'bold',
          fontSize: 22,
          padding: '18px 0 12px 0',
          textAlign: 'center',
          letterSpacing: 1,
          borderBottom: '2px solid #b0976b',
        }}>
          Feliz dia dos namorados
        </div>
        <div style={{
          fontSize: 13,
          fontWeight: 500,
          color: '#55795a',
          letterSpacing: 1,
          margin: '8px 0 18px 0'
        }}>
          O primeiro de muitos
        </div>

        {/* Botão start */}
        {!started &&
          <button
            onClick={() => setStarted(true)}
            style={{
              marginTop: 80,
              fontSize: 22,
              padding: '16px 44px',
              background: '#a18c6d',
              color: '#fff',
              border: 'none',
              borderRadius: 20,
              cursor: 'pointer',
              boxShadow: '0 2px 8px #0002',
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: 1.5,
              transition: 'background 0.2s',
            }}
          >Start</button>
        }

        {/* Carrossel */}
        {started && photos.length > 0 &&
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            minHeight: 500,
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <button onClick={prev} style={navBtnStyle}>&lt;</button>
              <div style={{
                width: 250, height: 370,
                margin: '0 12px',
                borderRadius: 24,
                boxShadow: '0 2px 24px #0002',
                overflow: 'hidden',
                background: '#e3dbc6',
                border: '3px solid #a18c6d',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <img
                  src={`/photos/${photos[current].src}`}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <button onClick={next} style={navBtnStyle}>&gt;</button>
            </div>
            <div style={{
              width: 260,
              minHeight: 70,
              padding: '10px 10px',
              background: '#f9f5ee',
              borderRadius: 14,
              border: '2px solid #a18c6d',
              color: '#5a4f32',
              fontSize: 16,
              whiteSpace: 'pre-line',
              boxShadow: '0 1px 4px #0001',
              marginBottom: 16,
            }}>
              {photos[current].text}
            </div>
            <div style={{ color: '#a18c6d', fontSize: 14, marginBottom: 6 }}>
              {current + 1} / {photos.length}
            </div>
            {/* Botão música */}
            <button
              onClick={() => window.open("https://open.spotify.com/track/7K4qp4Xh4nC1rXqY0tffx3", '_blank')}
              style={{
                background: '#4b3f20', color: '#fff', border: 'none',
                borderRadius: 14, padding: '10px 24px', fontSize: 17,
                marginBottom: 28, cursor: 'pointer', fontWeight: 500,
                boxShadow: '0 2px 8px #0001'
              }}>
              Ouvir música
            </button>
          </div>
        }
        {/* Rodapé */}
        <div style={{
          fontSize: 13, color: '#a18c6d', marginTop: 'auto', marginBottom: 12
        }}>
          Feito com amor por você para sua parceira, 2025.
        </div>
      </div>
    </div>
  );
}

const navBtnStyle = {
  background: '#d7c9b6',
  border: '2px solid #a18c6d',
  borderRadius: 18,
  color: '#4b3f20',
  fontWeight: 900,
  fontSize: 30,
  width: 44,
  height: 44,
  cursor: 'pointer',
  margin: '0 4px',
  userSelect: 'none'
};

export default App;
