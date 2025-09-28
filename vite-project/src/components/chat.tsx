import { useState } from "react";
import { type messageType } from "./types";
import Message from "./message";
import Textbox from "./textbox";

type chatProps = {
    selectMsgHandler: (index: number) => void;
    selectedMsgIndex: number | null;
}

function Chat(props : chatProps) {
    const [messages, setMessages] = useState<messageType[]>([]);

    const msgSubmitHandler = (text: string) => { 
        const newUserMessage: messageType = { text, layerOutputs: [] };
        // setMessages(prevMessages => [...prevMessages, newUserMessage]);
        fetch(`/api/chat?user_message=${text}`)
            .then(response => response.json())
            .then((data) => {
                const newBotMessage: messageType = { text: data.message, layerOutputs: data.layer_outputs };
                setMessages(prevMessages => [...prevMessages, newUserMessage, newBotMessage]);
            });
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
                <Textbox submitHandler={msgSubmitHandler} />
            </div>
        </>
    );
}

export default Chat;