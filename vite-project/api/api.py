import time
from fastapi import FastAPI
from fastapi.responses import JSONResponse

from lensgpt.model import Message
from lensgpt.utils import get_response

app = FastAPI()

# global variables + initialization
# in a real system this would be stored in DB
class ChatState:
    def __init__(self):
        self.log_len = 0
        self.chatlog = []  # ordered list of messages

chat_state = ChatState()

# TODO initialize the chatbot model here

@app.get("/api/chat")
async def respond(user_message: str) -> Message:
    global chat_state
    chat_state.log_len += 1
    m = Message(id=chat_state.log_len, message=user_message)
    chat_state.chatlog.append(m)

    # get a response from the chatbot
    response = get_response(chat_state.chatlog, None)
    chat_state.log_len += 1
    return Message(id=chat_state.log_len, message=response)

@app.post("/api/clear")
def clear():
    global chat_state
    chat_state = ChatState()
    return {"status": "success"}