from tkinter import Frame


class GetDataArea:

    def __init__(self, app):
        self.app = app
        self.this = Frame(master=self.app.get('root'), bg='green')

        self.build()

    def build(self):

        self.this.place(relx=0, rely=0, relwidth=0.5, relheight=1)
