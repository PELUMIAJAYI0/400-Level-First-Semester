
from _socket import socket
import socket

ss = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

print("server start")

#they must have the save port number before both can communicate Client and server

port = 8000
ip = socket.gethostname()

ss.bind((ip, port))

ss.listen(3)


con, addr = ss.accept()

print("address client cont {0} and port no {1}".format(addr[0], addr[1]))

data = con.recv(1024)

print("message from client before decoding", data)

data = data.decode()

print("message from client after decoding", data)
