import tkinter as tk


root = tk.Tk()


class App(tk.Frame):

    def __init__(self, master):
        super().__init__(master)

        self.master = master
        self.master.resizable(False, False)
        self.master.title('WhatsApp Sender')
        # 初始化 窗口位置于 屏幕正中心

        screen_width, width = root.winfo_screenwidth(), 1080
        screen_height, height = root.winfo_screenheight(), 640

        if screen_width < width or screen_height < height:
            print(f'设备的屏幕大小不支持, 需更换更大屏幕设备.\n最小屏幕尺寸: {width}x{height}')
            return

        self.app_width, self.app_height = width, height
        self.app_position_x, self.app_position_y = (
            screen_width - width) // 2, (screen_height - height) // 2
        self.master.geometry(
            f'{self.app_width}x{self.app_height}+{self.app_position_x}+{self.app_position_y}')

        self.place(x=0, y=0)
        self.build()

    def build(self):
        pass