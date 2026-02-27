import socket
cs = socket.socket(family = socket.AF_INET, type=socket.SOCK_STREAM)

ip = socket.gethostname()
port = 9000

cs.connect((ip,port))

print("Client start")

message = input("Enter a message---> ")
cs.send(message.encode())

message = input("enter message to chage to upper case---> ")
cs.send(message.encode())

data= cs.recv(1024).decode()
print("the time is--> ", data)