import { memo } from 'react';

type messageProps = {
    text: string;
    layerOutputs: Record<number, string>;
    selected?: boolean;
}

const Message = memo(function Message(props: messageProps) {
    // displays a message in a bubble
    // there's a highlight around the bubble if the message is selected
    return <div className="card">{props.text}</div>;
});

export default Message