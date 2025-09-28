import { Input } from "@/components/ui/input";

type layerSelectionProps = {
    numLayers: number;
    handler: (layer: number) => void;
}

function LayerSelection(props : layerSelectionProps) {
    return (
        <>
            <Input type="number" min={0} max={props.numLayers} defaultValue={33} onChange={(e) => props.handler(parseInt(e.target.value))} />
        </>
    );
}

export default LayerSelection;