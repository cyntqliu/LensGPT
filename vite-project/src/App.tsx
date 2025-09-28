import { useMemo, useState } from 'react'
import Chat from './components/chat';
import Info from './components/info';
import LayerSelection from './components/layerSelection';
import './App.css'

function App() {
  const [selectedLayer, setSelectedLayer] = useState(33);
  const [selectedMsgIndex, setSelectedMsgIndex] = useState<number | null>(null);
  
  const getLayerOutputs = useMemo(() => {
    console.log("Selected layer:", selectedLayer);
    // TODO: call on the logit lens backend to get the outputs for the selected layer
  }, [selectedLayer]);

  return (
    <>
      <div className="container">
        <div className="left-panel">
          <Info />
          <LayerSelection numLayers={48} handler={(layer) => setSelectedLayer(layer)} />
        </div>
        <Chat
          selectMsgHandler={(index) => setSelectedMsgIndex(index)}
          selectedMsgIndex={selectedMsgIndex}
        />
      </div>
    </>
  );
}

export default App
