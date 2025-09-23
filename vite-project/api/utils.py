'''
Utility methods
'''
from .model import Message


def create_context(chatlog: list[Message]):
    '''
    Creates the context for the chatbot given the current chatlog

    Args:
        chatlog: list[Message] - chatlog
    Returns:
        context: str - context for the chatbot for chatting
    '''
    context = ""
    for i, msg in enumerate(chatlog):
        speaker = "User" if i % 2 == 0 else "Chatbot"
        context += f"{speaker}: {msg.message}\n"
    return context


def get_response(chatlog: list[Message], model):
    '''
    Get a response from the chatbot given the chat log. The last message
    in the chatlog is a user message

    Args:
        chatlog: list[Message] - chatlog
    Returns:
        response: str - response from the chatbot
    '''
    return ''