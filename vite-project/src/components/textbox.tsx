import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

type textboxProps = {
    submitHandler: (text: string) => void;
}

function Textbox(props : textboxProps) {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (text.trim()) {
            props.submitHandler(text);
            setText("");
        }
    };

    return (
        <>
            <div className="grid w-full gap-2">
                <Textarea 
                    placeholder="Type your message here."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button onClick={handleSubmit}>Send message</Button>
            </div>
        </>
    );
}

export default Textbox;