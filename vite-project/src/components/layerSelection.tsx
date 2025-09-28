import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

type layerSelectionProps = {
    numLayers: number;
    handler: (layer: number) => void;
}

function LayerSelection(props : layerSelectionProps) {
    return (
        <>
            <div className="flex w-full max-w-sm items-center gap-2">
                <Input type="number" min={0} max={props.numLayers} defaultValue={33} onChange={(e) => props.handler(parseInt(e.target.value))} />
                <Button type="submit" variant="outline">
                    Go
                </Button>
            </div>
        </>
    );
}

export default LayerSelection;