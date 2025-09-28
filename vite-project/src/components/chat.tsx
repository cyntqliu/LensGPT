import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { type messageType } from "./types";
import Message from "./message";

type chatProps = {
    selectMsgHandler: (index: number) => void;
    selectedMsgIndex: number | null;
}

function Chat(props : chatProps) {
    const [messages, setMessages] = useState<messageType[]>([]);

    const chat = (text: string) => { 
        const newUserMessage: messageType = { text, layerOutputs: [] };
        setMessages(prevMessages => [...prevMessages, newUserMessage]);
        // have the chatbot respond to the new message
    };
    
    return (
        <>
            <div className="chat-container">
                <div className="message-container">
                    {messages.map((msg, index) => (
                        <Message
                            key={index}
                            text={msg.text}
                            layerOutputs={msg.layerOutputs}
                            selected={index === props.selectedMsgIndex}
                        />
                    ))}
                </div>
                <div className="input-container">
                    <Textarea placeholder="Type your message here..." className="chat-input" />
                </div>
            </div>
        </>
    );
}

export default Chat;