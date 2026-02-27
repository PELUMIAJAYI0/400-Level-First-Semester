import socket
import time

ss = socket.socket(family = socket.AF_INET, type=socket.SOCK_STREAM)

ip = socket.gethostname()
port = 9000

ss.bind((ip,port))

ss.listen(5)

print("server start")

con, addr= ss.accept()


data= con.recv(1024).decode()
print("message from client--> ", data)

data = con.recv(1024).decode()
print("message from client upper case---> ", data.upper())

ct = time.ctime()
con.sendall(ct.encode())
