from tkinter import Frame, StringVar, Entry, Button, messagebox, Text


class SendingArea:

    def __init__(self, app):
        self.app = app
        self.this = Frame(master=self.app.get('root'), bg='blue')
        self.size = self.app.get('width') // 2, self.app.get('height')

        self.define_vars()
        self.build()

    # Vars
    def define_vars(self):
        self.phoneVar_placeholder = 'Введите номер получателя'
        self.phoneVar = StringVar(self.this, self.phoneVar_placeholder)

    def build(self):
        phone = Entry(self.this, textvariable=self.phoneVar)
        phone.bind('<FocusIn>', self.focus_phone)
        phone.bind('<FocusOut>', self.blur_phone)
        phone.place(x=15, y=15, relwidth=0.7, height=40)

        Button(self.this, text='Инструкции', command=lambda: self.show_instruction()).place(
            x=self.size[0]*0.7 + 30, y=15, width=self.size[0]*0.3 - 45, height=40)

        self.text = Text(self.this)
        self.text_placeholder = 'Введите тескт сообщения'
        self.text.insert(0.0, self.text_placeholder)
        self.text.place(
            x=15, y=70, width=self.size[0]-30, height=self.size[1]-40*2-15*4)

        Button(self.this, text='Начать Отправить', command=lambda: self.handle_send()).place(
            x=15, y=self.size[1]-55, width=self.size[0]-30, height=40)

        self.this.place(relx=0.5, rely=0, relwidth=0.5, relheight=1)

    def focus_phone(self, e):
        if self.phoneVar.get() == self.phoneVar_placeholder:
            self.phoneVar.set('')

    def blur_phone(self, e):
        if self.phoneVar.get() == '':
            self.phoneVar.set(self.phoneVar_placeholder)

    def show_instruction(self):
        instruction = 'еще не завершено.'
        messagebox.showinfo('Инструкции', instruction)

    def handle_send(self):
        # 调用 controller 内的 send_msg_instantly 方法
        print('phone: ', self.phoneVar.get())
        print('text: ', self.text.get(0.0, 'end'))