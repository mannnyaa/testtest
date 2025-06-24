import React, { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <h1>Hello World</h1>
  );
}

export default App;