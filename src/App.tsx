import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainSite from './components/MainSite';

export default function App() {
  const [engineStarted, setEngineStarted] = useState(false);

  return (
    <>
      {!engineStarted ? (
        <LoadingScreen onComplete={() => setEngineStarted(true)} />
      ) : (
        <MainSite />
      )}
    </>
  );
}
