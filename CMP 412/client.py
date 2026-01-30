
import socket

cs = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

print("client start")

#port number and ip address
port = 8000
ip = socket.gethostname()

cs.connect((ip, port))

msg = "hello server"

cs.send(msg.encode())

#receive time from server
data = cs.recv(1024).decode()

print("message from server", data)

