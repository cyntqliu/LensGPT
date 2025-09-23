from pydantic import BaseModel


class Message(BaseModel):
    '''
    id: int - id of message. Just a global counter for now, no real functionality
    message: str - output message sent to the user
    layer_outputs: dict[int, str] - optional map of intermediate layer number to 
        lens-generated output at that layer
    '''
    id: int
    message: str
    layer_outputs: dict[int, str] = {}