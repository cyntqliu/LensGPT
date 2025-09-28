import { Textarea } from "@/components/ui/textarea"
import Message from "./message";

type chatProps = {
    messages: { text: string; layerOutputs: Record<number, string> }[];
}

function Chat(props : chatProps) {
    return (
        <>
            <div className="chat-container">
                <div className="message-container">
                    {props.messages.map((msg, index) => (
                        <Message key={index} text={msg.text} layerOutputs={msg.layerOutputs} />
                    ))}
                </div>
                <div className="input-container">
                    <Textarea placeholder="Type your message here..." />
                </div>
            </div>
        </>
    );
}

export default Chat;