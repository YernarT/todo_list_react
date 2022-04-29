from tkinter import Frame, StringVar, Button, messagebox, Checkbutton, Label
from json import dumps, loads


class GetDataArea:

    def __init__(self, app):
        self.app = app
        self.this = Frame(master=self.app.get('root'), bg='red')
        self.size = self.app.get('width') // 2, self.app.get('height')

        self.define_vars()
        self.build()

        # default data
        self.refresh_data_view('kovorking')

     # Vars
    def define_vars(self):
        self.current_data_category = StringVar()
        self.dataCountVar = StringVar(self.this, '0')

        self.mock_data = [
            {
                "name": "Discovery Space",
                "site": "https://astana.spravker.ru/kovorking/discovery-space.htm",
                "address": "ул. Сауран, 46, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (775) 315-91-30, +7 (702) 999-86-51"
            },
            {
                "name": "Dc Lab",
                "site": "https://astana.spravker.ru/kovorking/dc-lab.htm",
                "address": "Родниковая ул., 1/1, микрорайон Шубар, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (708) 818-00-07"
            },
            {
                "name": "Ти Дранк",
                "site": "https://astana.spravker.ru/chajnyie-magazinyi/teadrunkclub.htm",
                "address": "ул. Желтоксан, 48/1, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (747) 590-13-72, +7 (705) 160-59-59, +7 (705) 385-22-30"
            },
            {
                "name": "IQ coworking",
                "site": "https://astana.spravker.ru/org/iq-coworking.htm",
                "address": "ул. Достык, 5/2, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (701) 755-88-98, +7 (7172) 75-58-88"
            },
            {
                "name": "Коворкинг Team",
                "site": "https://astana.spravker.ru/org/kovorking-team.htm",
                "address": "просп. Рахимжана Кошкарбаева, 10/1, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (701) 065-77-00"
            },
            {
                "name": "New Choice",
                "site": "https://astana.spravker.ru/org/new-choice.htm",
                "address": "ул. Отырар, 4/2, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (701) 888-86-63"
            },
            {
                "name": "Regus - Nur-Sultan, Emerald Tower",
                "site": "https://astana.spravker.ru/kovorking/regus-nur-sultan-emerald-tower.htm",
                "address": "ул. Динмухамеда Кунаева, 10, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (727) 344-00-77"
            },
            {
                "name": "Казтемиртранс",
                "site": "https://astana.spravker.ru/zheleznodorozhnyie-gruzoperevozki/kaztemirtrans.htm",
                "address": "ул. Динмухамеда Кунаева, 10, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (7172) 93-02-01, +7 (7172) 93-02-04, +7 (7172) 93-03-95, +7 (7172) 93-02-21, +7 (7172) 93-03-00"
            },
            {
                "name": "Free life",
                "site": "https://astana.spravker.ru/org/free-life.htm",
                "address": "ул. Ханов Керея и Жанибека, 28, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (775) 009-09-13, +7 (701) 526-59-30"
            },
            {
                "name": "Coworking iHub",
                "site": "https://astana.spravker.ru/kovorking/coworking-ihub.htm",
                "address": "ул. Динмухамеда Кунаева, 12/1, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (771) 333-16-66"
            },
            {
                "name": "Zapis Astana",
                "site": "https://astana.spravker.ru/kovorking/zapis-astana.htm",
                "address": "пер. Иманова, 19, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (705) 333-57-33"
            },
            {
                "name": "Ar-Audit",
                "site": "https://astana.spravker.ru/org/ar-audit1.htm",
                "address": "ул. Айнакол, 60, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (7172) 23-18-86"
            },
            {
                "name": "Astana Group Kazakhstan Office",
                "site": "https://astana.spravker.ru/org/astana-group-kazakhstan-office.htm",
                "address": "Казахстан, Нур-Султан (Астана), Байконурский район",
                "phone": "+7 (7172) 96-86-86"
            },
            {
                "name": "Webicom. Kz",
                "site": "https://astana.spravker.ru/org/webicom-kz1.htm",
                "address": "просп. Сарыарка, 8, Нур-Султан (Астана), Казахстан",
                "phone": "+7 (7172) 79-03-62"
            },
            {
                "name": "Антикафе Downtown",
                "site": "https://astana.spravker.ru/antikafe/antikafe-downtown.htm",
                "address": "Казахстан, Астана, улица Желтоксан, 2/3",
                "phone": "+7 (700) 749-09-09, +7 (7172) 28-69-21"
            }
        ]
        self.dataVar = StringVar(self.this, '[]')

    def build(self):
        self.data_categories()
        self.toolbar()
        self.data_view()

        self.this.place(relx=0, rely=0, relwidth=0.5, relheight=1)

    # 数据类别
    def data_categories(self):
        Button(self.this, text='Коворкинги', command=lambda: self.refresh_data_view(
            'kovorking')).place(x=15, y=15, width=100, height=40)
        Button(self.this, text='Магазины', command=lambda: self.refresh_data_view(
            'shop')).place(x=130, y=15, width=100, height=40)
        Button(self.this, text='Рестораны', command=lambda: self.refresh_data_view(
            'restaurant')).place(x=245, y=15, width=100, height=40)

    def refresh_data_view(self, category):
        if category == self.current_data_category:
            return
        

        self.current_data_category.set(category)
        # 调用 controller 内的 get_data(category) 方法
        self.dataVar = dumps(self.mock_data)
        print(self.dataVar)

    def toolbar(self):
        Checkbutton(self.this).place(x=15, y=70+7.5)
        Label(self.this, text='Выбрать все').place(
            x=40+15, y=70, width=80, height=40)

        Label(self.this, text='Объем данных: ').place(
            x=self.size[0]-15-30-100, y=70, width=100, height=40)
        Label(self.this, textvariable=self.dataCountVar).place(
            x=self.size[0]-15-30, y=70, width=30, height=40)

    def data_view(self):
        data = loads(self.dataVar.get())
        def set_data(idx, data):
            print('set data: ', idx, data)

        if not data:
            Label(self.this, text='Нет данных').place(
                x=40+15, y=125, width=80, height=40)
            return

        data_list = Frame(self.this, bg='green')
        for i in range(10):
            self.data_cell(data_list, i, data[i], set_data)

        data_list.place(x=0, y=125, relwidth=1, height=self.size[1]-125)

    def data_cell(self, master, idx, data, set_data):
        get_y = lambda: idx*40 + 15*(idx+1)

        Checkbutton(master).place(x=15, y=get_y()+7.5)
        name = data.get('name')
        if len(name) > 16:
            name = name[:16]+'...'
        Label(master, text=name).place(x=55, y=get_y(), width=100, height=40)
        
        # Label(master, text=data.get('phone')).place(x=170, y=get_y(), width=110, height=40)