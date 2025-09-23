import pytest
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent))

from api.utils import *
from api.model import Message


def test_create_context_one():
    '''
    create context with just one message
    '''
    testlog = [Message(id=0, message="henlosu")]
    context = create_context(testlog)
    assert context == "User: henlosu\n"
