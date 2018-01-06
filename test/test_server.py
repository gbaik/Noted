import os
import sys
import pytest

sys.path.append(os.path.abspath(os.path.join(os.path.dirname( __file__ ), '..', 'server')))

import index

def test_connection():
  pass

def test_getAllNotes():
  pass

def test_getOneNote():
  pass

def test_addNote():
  pass

def test_editNote():
  pass

if __name__ == '__main__':
  test_connection()