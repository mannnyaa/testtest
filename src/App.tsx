import React, { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

function App() {
  useEffect(() => {
    // Вызываем ready после монтирования компонента
    sdk.actions.ready();
  }, []); // Пустой массив зависимостей, чтобы вызов произошёл один раз

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0e7ff, #f5e0ff)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4b5e82',
        fontFamily: "'Helvetica Neue', sans-serif",
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: '300',
          letterSpacing: '4px',
          color: '#6b7280',
          opacity: 0.9,
          margin: 0,
          textTransform: 'lowercase',
        }}
      >
        x x x
      </h1>
      <p
        style={{
          fontSize: '1.1rem',
          fontWeight: 'light',
          color: '#64748b',
          maxWidth: '400px',
          textAlign: 'center',
          margin: '1rem 0',
          lineHeight: 1.5,
          opacity: 0.8,
        }}
      >
        a whisper of the unknown, where shadows dance with light
      </p>
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(to right, #c4b5fd, #a5b4fc)',
          opacity: 0.7,
          cursor: 'pointer',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.2)';
          e.target.style.opacity = 1;
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.opacity = 0.7;
        }}
      />
    </div>
  );
}

export default App;