
import socket

cs = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

print("client start")


port = 8000
ip = socket.gethostname()

cs.connect((ip, port))

msg = "hello server"

cs.send(msg.encode())

