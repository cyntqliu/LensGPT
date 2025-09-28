import { useState } from 'react'
import Chat from './components/chat';
import Info from './components/info';
import LayerSelection from './components/layerSelection';
import './App.css'

function App() {
  const [messages, setMessages] = useState<{ text: string; layerOutputs: Record<number, string> }[]>([]);
  const [selectedLayer, setSelectedLayer] = useState(33);

  return (
    <>
      <div className="left-panel">
        <Info />
        <LayerSelection numLayers={48} handler={(layer) => setSelectedLayer(layer)} />
      </div>
      <Chat messages={messages} />
    </>
  );
}

export default App
