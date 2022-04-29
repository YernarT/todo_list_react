from pywhatkit import sendwhatmsg_instantly

def send_msg_instantly(phone, text):
    sendwhatmsg_instantly(phone, text, 0)
