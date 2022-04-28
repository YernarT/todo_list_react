from tkinter import Tk
from view.get_data_area.main import GetDataArea
from view.sending_area.main import SendingArea


class App:

    def __init__(self):

        root = Tk()
        # 全局 app 对象, 用于传递 app 根组件上下文
        self.app = {}

        root.resizable(False, False)
        root.title('WhatsApp Sender')

        # 初始化 窗口位置于 屏幕正中心
        screen_width, app_width = root.winfo_screenwidth(), 1200
        screen_height, app_height = root.winfo_screenheight(), 650

        if screen_width < app_width or screen_height < app_height:
            print(f'设备的屏幕大小不支持, 需更换更大屏幕设备.\n最小屏幕尺寸: {app_width}x{app_height}')
            return

        app_position_x, app_position_y = (
            screen_width - app_width) // 2, (screen_height - app_height) // 2
        root.geometry(
            f'{app_width}x{app_height}+{app_position_x}+{app_position_y}')

        self.app['width'], self.app['height'] = app_width, app_height
        self.app['position_x'], self.app['position_y'] = app_position_x, app_position_y

        self.app['root'] = root

        self.build()
        root.mainloop()

    def build(self):
        get_data_area = GetDataArea(self.app)
        sending_area = SendingArea(self.app)
