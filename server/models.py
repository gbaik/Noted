from mongoengine import *

connect('Notes')

class NotesSchema(Document):
    Title = StringField(required=True)
    Entry = StringField()
