import pytest
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent))

from lensgpt.utils import *
from lensgpt.model import Message


def test_create_context_one():
    '''
    create context with just one message
    '''
    testlog = [Message(id=0, message="henlosu")]
    context = create_context(testlog)
    assert context == "User: henlosu\n"


def test_create_context_multi():
    '''
    create context with multiple messages
    '''
    testlog = [
        Message(id=0, message="henlosu"),
        Message(id=1, message="Hi there! Can I help you with anything?", layer_outputs={23: "foobar"}),
        Message(id=2, message="why am I writing this project?"),
        Message(id=3, message="What project are you referring to? Without seeing the actual file structure and content of your files, I can't provide specific guidance"),
    ]
    context = create_context(testlog)
    answer = """User: henlosu
Chatbot: Hi there! Can I help you with anything?
User: why am I writing this project?
Chatbot: What project are you referring to? Without seeing the actual file structure and content of your files, I can't provide specific guidance\n"""
    assert context == answer
