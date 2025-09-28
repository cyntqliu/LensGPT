type messageProps = {
    text: string;
    layerOutputs: Record<number, string>;
}

function Message(props : messageProps) {
    // displays a message in a bubble
    return <div>{props.text}</div>;
}

export default Message