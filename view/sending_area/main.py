from tkinter import Frame, StringVar, Entry, Button

class SendingArea:

    def __init__(self, app):
        self.app = app
        self.this = Frame(master=self.app.get('root'), bg='blue')
        self.size = self.app.get('width') // 2, self.app.get('height')

        self.build()

    
    def build(self):
        phoneVar = StringVar(self.this, 'Введите номер получателя')
        phone = Entry(self.this, textvariable=phoneVar)
        phone.place(x=15, y=15, relwidth=0.7, height=40)

        Button(self.this, text='README').place(x=self.size[0]*0.7 + 30, y=15, width=self.size[0]*0.3 - 45, height=40)

        self.this.place(relx=0.5, rely=0, relwidth=0.5, relheight=1)