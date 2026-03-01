# import socket
# import time

# ss = socket.socket(family = socket.AF_INET, type=socket.SOCK_STREAM)

# ip = socket.gethostname()
# port = 9000

# ss.bind((ip,port))


# ss.listen(5)

# print("server start")

# con, addr= ss.accept()


# data= con.recv(1024).decode()
# print("message from client--> ", data)

# data = con.recv(1024).decode()
# print("message from client upper case---> ", data.upper())

# ct = time.ctime()
# con.sendall(ct.encode())


import socket
import time
from _thread import start_new_thread

def function(con):
    while True:
        data=con.recv(1024).decode()
        if not data:
            break
        
        print("message from client---> ", data)
        upper_message= data.upper()
        current_time = time.ctime()
        
        result = upper_message + " " + current_time
        con.sendall(result.encode())
        
    con.close()
    
ss = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

ip = socket.gethostname()
port=9000

print("server started")

ss.bind((ip,port))
ss.listen(5)

while True:
    con,addr = ss.accept()
    start_new_thread(function, (con,))