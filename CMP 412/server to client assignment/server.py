import socket
from _thread import start_new_thread

def function(con):
    while True:
        data = con.recv(1024).decode()
        if not data:
            break
        con.sendall(data.upper().encode())

    con.close()

ss = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

ip = socket.gethostname()
port = 9000

ss.bind((ip,port))
ss.listen(5)

print("Server start")

while True:
    con,addr = ss.accept()
    start_new_thread(function, (con,))
